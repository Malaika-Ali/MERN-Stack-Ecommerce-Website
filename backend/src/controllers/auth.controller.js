import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiResponse } from '../utils/ApiResponse.js'
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
    const token = signToken(user.id);

    console.log(process.env.REFRESH_TOKEN_EXPIRY);
    const cookieOptions = {
        expires: new Date(Date.now() + +process.env.REFRESH_TOKEN_EXPIRY),
        httpOnly: true,
        path: '/',
        sameSite: "none",
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
  try {
      const code = req.query.code;
      console.log(`The code is ${code}`)
      if (!code) {
        throw new ApiError(400, "Authorization code is missing in the request.");
    }
      console.log("USER CREDENTIAL -> ", code);


      const googleRes = await oauth2Client.getToken(code);


      console.log(`Testing Testing part 3!!!!! ${googleRes}`)
      oauth2Client.setCredentials(googleRes.tokens);
  
      const userRes = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
  	);

    const {email, name}=userRes.data
    console.log(email, name)
    let user = await User.findOne({ email });

    if (!user) {
        console.log('New User found');
        user = await User.create({
            name,
            email
        });
    }

    const {_id}= user
    const token=jwt.sign({ _id, email },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
);

return res.status(200).json({
    message: "Success",
    token,
    user
})
    
  } catch (error) {
    console.log(error)
    throw new ApiError(500, "Error in Signing up user using Google O Auth!!!!!!!!!!", error)
    
  }
	
});
    



export {googleAuth}