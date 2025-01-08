import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { ApiError } from '../utils/ApiError.js'
import oauth2Client from '../utils/oath2Client.js'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { promisify } from 'util'
import { User } from '../models/user.model.js'

const signToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    });
};


// Create and send Cookie ->
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user.id);

    console.log(process.env.REFRESH_TOKEN_EXPIRY);
    const cookieOptions = {
        expires: new Date(Date.now() + +process.env.REFRESH_TOKEN_EXPIRY),
        httpOnly: true,
        path: '/',
        // sameSite: "none",
        secure: false,
    };
    if (process.env.NODE_ENV === 'production') {
        cookieOptions.secure = true;
        cookieOptions.sameSite = 'none';
    }


    user.password = undefined;

    res.cookie('jwt', token, cookieOptions);

    console.log(user);

    res.status(statusCode).json({
        message: 'success',
        token,
        data: {
            user,
        },
    });
};


/* GET Google Authentication API. */
const googleAuth = asyncHandler(async (req, res, next) => {
    const code = req.query.code;
    console.log("USER CREDENTIAL -> ", code);
    const googleRes = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(googleRes.tokens);

    const userRes = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
	);
	
    let user = await User.findOne({ email: userRes.data.email });
   
    if (!user) {
        console.log('New User found');
        user = await User.create({
            fullname: userRes.data.name,
            email: userRes.data.email,
        });
    }
    createSendToken(user, 201, res);
});



export {googleAuth}