import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import { User } from '../models/user.model.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { response } from 'express'


const registerUser=asyncHandler(async (req, res)=>{
   const {username, fullname, email, password, role}=req.body
   console.log("email", email)

   if(fullname===""){
    throw new ApiError(400, "Full Name is Required!")
   }else if(username===""){
    throw new ApiError(400, "Username is Required!")
   }
   else if(email===""){
    throw new ApiError(400, "Email is Required!")
   }
   else if(password===""){
    throw new ApiError(400, "Password is Required!")
   }
  

   const existedUser=User.findOne({email})

   if (existedUser) {
    throw new ApiError(409, "User with this eamil already exists")
    
   }

   const user= await User.create({
    username,
    fullname,
    email,
    password,
    role
   })

//    Check if user is created in databse by using recent entry's id
   const createdUser=await User.findById(user._id).select(
    "-password -refreshToken"
   )

   if(!createdUser){
    throw new ApiError(500, "User couldn't be Registered! Try Again.")
   }

   return res.status(201).json(
    new ApiResponse(200, createdUser, "User Has Been Registered Successfully!")
   )
})


export {registerUser}