import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import { User } from '../models/user.model.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import jwt from "jsonwebtoken";
import mongoose from "mongoose";


// Method to generate access and refresh tokens
const generateAccessAndRefreshTokens = async (userId) => {
   try {
       const user = await User.findById(userId)
       const accessToken = user.generateAccessToken()
       const refreshToken = user.generateRefreshToken()

       // Passsing the above generated refreshToken to the user object
       // refresh token comes from the user model property
       user.refreshToken = refreshToken

       // Now we will save this access token
      //  validate before save false ensures that User schema doesn't stop this document from saving because we are not providing other field values as well
       await user.save({ validateBeforeSave: false })
       return { accessToken, refreshToken }
   } catch (error) {
       throw new ApiError(500, "Something went wrong while generating Access and Refresh Tokens")
   }
}

const registerUser=asyncHandler(async (req, res)=>{
   const { name, email, password, role}=req.body
   console.log("email", email)

   if(name===""){
    throw new ApiError(400, "Name is Required!")
   }
   else if(email===""){
    throw new ApiError(400, "Email is Required!")
   }
   else if(password===""){
    throw new ApiError(400, "Password is Required!")
   }
  

   const existedUser=await User.findOne({email})

   if (existedUser) {
    throw new ApiError(409, "User with this eamil already exists")
    
   }

   const user= await User.create({
    name,
    email,
    password,
    role
   })

//    Check if user is created in database by using recent entry's id
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




const loginUser = asyncHandler(async (req, res) => {
   const { email, password } = req.body

   if (!email) {
       throw new ApiError(400, "Email is required")
   }

   // using the mongoDb or operator
   // This User comes from the schema we imported from the user model
   // Since the database is in another continent so need await here
   const user = await User.findOne({ email})

   // If user is not found
   if (!user) {
       throw new ApiError(404, "The user does not exist")
   }


   // ye argument wala password req.body se aya
   const isPasswordValid = await user.isPasswordCorrect(password)

   // if the password is not correct we get false and throw error
   if (!isPasswordValid) {
       throw new ApiError(401, "Incorrect Password! Invalid user credentials")
   }

   // Destructuring the accessToken and  refresh token from the token generation function
   const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id)

   // select tells which fields not to give
   const loggedInUser = await User.findById(user._id).select("-password -refreshToken")


   // set options for setting cookies
   // These options make the cookies modifiable only through server and only accessible to frontend and not modifiable through the frontend otherwise cookies are modifiable through frontend also
   const options = {
       httpOnly: true,
       sameSite: "lax",
       secure: process.env.NODE_ENV === "production",

   }

   return res.status(200)
       .cookie("accessToken", accessToken, options)
       .cookie("refreshToken", refreshToken, options)
       .json(
           new ApiResponse(200, {
               user: loggedInUser, accessToken, refreshToken
           },
               "User Logged In successfully")
       )
})


const logoutUser=asyncHandler(async(req,res)=>{
   await User.findByIdAndUpdate(req.user._id,
      {
         $set: {refreshToken: undefined}
      },
      // This new gives us the new updated value of user in the response which no longer has refresToken
      {
         new: true
      }
   )
   const options = {
      httpOnly: true,
      sameSite: "none",
      secure: true,

  }
  return res.status(200).clearCookie("accessToken", options).clearCookie("refreshToken", options).json(new ApiResponse(200, {}, "User Logged out successfully"))
})



const refreshAccessToken= asyncHandler(async(req,res)=>{
   const incomingRefreshToken= req.cookies.refreshToken || req.body.refreshToken

   if(!incomingRefreshToken){
      throw new ApiError(401, "Unauthorized Request!!!")
   }

  try {
    const decodedToken=jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)
 
    const user=await User.findById(decodedToken?._id)
 
    if(!user){
       throw new ApiError(401, "Invalid Refresh Token!!!")
    }
 
    if(incomingRefreshToken !== user?.refreshToken){
       throw new ApiError(401, "The provided refresh Token does not match any of the saved refresh Token!!!")
    }
 
    const options={
       httpOnly: true,
       sameSite: "none",
       secure: true
    }
 
    const {accessToken, newRefreshToken}= await generateAccessAndRefreshTokens(user._id)
 
    return res.status(200).cookie("accessToken", accessToken ).cookie("refreshToken", newRefreshToken).json(
       new ApiResponse(200, {
          accessToken , newRefreshToken
       },
    "Access Token Refreshed Successfully!!")
    )
  } catch (error) {
   throw new ApiError(401, error?.message || "Invalid Refresh Token!!")
  }
})



const deleteUser=asyncHandler(async(req,res)=>{
   try {
      const id=req.params.id
      const user=await User.findByIdAndDelete(id)
      if(!user){
         throw new ApiError(404, "User Not Found")
      }
      res.status(200).json(
         new ApiResponse(200, {}, "User Deleted Successfully!!!")
      )
   } catch (error) {
      throw new ApiError(404, "Error while deleting User!!!")
   }
})


const getAllUsers=asyncHandler(async(req,res)=>{
   try {
      const users=await User.find({}, "id email name role").sort({createdAt: -1})
      if(!users){
         throw new ApiError(404, "Users Not Found")
      }
      res.status(200).json(
         new ApiResponse(200, users, "Users fetched Successfully!!!")
      )
   } catch (error) {
      throw new ApiError(401, "Error while fetching Users!!!")
   }
})


const updateUserRole=asyncHandler(async(req,res)=>{
   try {
      const id=req.params.id
      const {role}= req.body
      const user=await User.findByIdAndUpdate(id, { role}, {new: true})
      if(!user){
         throw new ApiError(404, "User Not Found")
      }
      res.status(200).json(
         new ApiResponse(200, user, "User's role updated Successfully!!!")
      )
   } catch (error) {
      throw new ApiError(401, "Error while Updating User's role!!!", error )
   }
})


// const updateUserProfile=asyncHandler(async(req,res)=>{
//    try {
//       const {_id}= req.user
//       const user=await User.findByIdAndUpdate(id, { role}, {new: true})
//       if(!user){
//          throw new ApiError(404, "User Not Found")
//       }
//       res.status(200).json(
//          new ApiResponse(200, user, "User's Profile updated Successfully!!!")
//       )
//    } catch (error) {
//       throw new ApiError(401, "Error while Updating User's profile!!!", error )
//    }
// })

export {registerUser,loginUser, logoutUser, refreshAccessToken, deleteUser, getAllUsers, updateUserRole}
