import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import {oauth2Client} from '../utils/oath2Client.js'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'

const signToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });
};


// Create and send Cookie ->
const createSendToken = (user, statusCode, res) => {
    // Generate access token
    const accessToken = signToken(user.id);

    // Generate refresh token
    const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    });

    // Save the refresh token in the database
    user.refreshToken = refreshToken;
    user.save({ validateBeforeSave: false });

    const cookieOptions = {
        expires: new Date(Date.now() + +process.env.REFRESH_TOKEN_EXPIRY),
        httpOnly: true,
        path: '/',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        secure: process.env.NODE_ENV === 'production',
    };

    res.cookie('accessToken', accessToken, cookieOptions);
    res.cookie('refreshToken', refreshToken, cookieOptions);

    user.password = undefined;

    res.status(statusCode).json({
        message: 'success',
        accessToken,
        refreshToken,
        data: {
            user,
        },
    });
};


const googleAuth = asyncHandler(async (req, res, next) => {
    try {
      const code = req.query.code;
      console.log(`The code is ${code}`);
      if (!code) {
        throw new ApiError(400, "Authorization code is missing in the request.");
      }
  
      console.log("USER CREDENTIAL -> ", code);
  
      // Exchange the authorization code for tokens
      const googleRes = await oauth2Client.getToken(code);
      console.log("Google Token Response -> ", googleRes);
  
      oauth2Client.setCredentials(googleRes.tokens);
  
      // Get user info from Google
      const userRes = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
      );
      console.log("Google User Info Response -> ", userRes.data);
  
      const { email, name } = userRes.data;
      console.log("User Email and Name -> ", email, name);
  
      // Check if the user already exists in the database
      let user = await User.findOne({ email });
      console.log("User from Database -> ", user);
  
      // If the user doesn't exist, create a new user
      if (!user) {
        console.log('New User found');
        user = await User.create({
          name,
          email,
        });
        console.log("New User Created -> ", user);
      }
  
      // Generate access token
      const accessToken = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      });
  
      // Generate refresh token
      const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      });
  
      // Save the refresh token in the database
      user.refreshToken = refreshToken;
      await user.save({ validateBeforeSave: false });
  
      // Convert REFRESH_TOKEN_EXPIRY to milliseconds
      const convertExpiryToMilliseconds = (expiry) => {
        const unit = expiry.slice(-1); // Get the last character (e.g., 'd' for days)
        const value = parseInt(expiry.slice(0, -1)); // Get the numeric value (e.g., 7)
  
        switch (unit) {
          case 's': // seconds
            return value * 1000;
          case 'm': // minutes
            return value * 60 * 1000;
          case 'h': // hours
            return value * 60 * 60 * 1000;
          case 'd': // days
            return value * 24 * 60 * 60 * 1000;
          default:
            throw new Error('Invalid expiry format. Use s, m, h, or d.');
        }
      };
  
      // Set cookie options
      const cookieOptions = {
        // expires: new Date(Date.now() + convertExpiryToMilliseconds(process.env.REFRESH_TOKEN_EXPIRY)),
        httpOnly: true,
        // path: '/',
        sameSite: 'none',
        secure: process.env.NODE_ENV === 'production',
      };
  
      // Set cookies
      res.cookie('accessToken', accessToken, cookieOptions);
      res.cookie('refreshToken', refreshToken, cookieOptions);
  
      // Remove sensitive data from the response
      user.password = undefined;
  
      // Send response
      res.status(200).json({
        message: 'success',
        accessToken,
        refreshToken,
        data: {
          user,
        },
      });
  
    } catch (error) {
      console.error("Error in googleAuth -> ", error);
      throw new ApiError(500, "Error in Signing up user using Google O Auth", error);
    }
  });


export {googleAuth}