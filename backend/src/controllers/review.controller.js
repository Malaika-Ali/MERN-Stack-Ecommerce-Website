import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { Review } from '../models/review.model.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import jwt from "jsonwebtoken";


const postReview = asyncHandler(async (req, res) => {
   try {
     const productId = req.params.productId
 
     // Getting user's Id by decoding cookie coming in the request
     const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
 
     if (!token) {
         throw new ApiError(401, "Unauthorized Request!!!!")
     }
     const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
     const userId = decodedToken?._id
 
     const {comment, rating}=req.body
 

     const review=await Review.create({
         productId,
         userId,
         comment,
         rating
     })
 
     if(!review){
         throw new ApiError(404, "The product does not exist")
     }

     return res.status(201).json(
        new ApiResponse(200, review, "The Review has been Added Successfully!")
    )
   } catch (error) {
    throw new ApiError(500, "Error Adding The Review! Try Again.")
   }
})


const deleteReview = asyncHandler(async (req, res) => {
    try {
      const reviewId = req.params.reviewId
  
      const deletedReview=await Review.findByIdAndDelete(reviewId)
  
      if(!deletedReview){
          throw new ApiError(404, "The Review could not be deleted!")
      }
 
      return res.status(201).json(
         new ApiResponse(200, {}, "The Review has been Deleted Successfully!")
     )
    } catch (error) {
     throw new ApiError(500, "Error Deleting The Review! Try Again.")
    }
 })


 const getAllReviews = asyncHandler(async (req, res) => {
    try {
      const productId = req.params.productId
  
      const productReviewsNumber=await Review.countDocuments({productId : productId})
      const productReviews=await Review.find({productId : productId})
  
      if(!productReviews){
          throw new ApiError(404, "The Review could not be fetched!")
      }
 
      return res.status(201).json(
         new ApiResponse(200, { productReviewsNumber ,productReviews}, "The Reviews have been Fetched Successfully!")
     )
    } catch (error) {
     throw new ApiError(500, "Error Fetching The Reviews! Try Again.")
    }
 })



 const updateReview = asyncHandler(async (req, res) => {
     try {
         const reviewId = req.params.reviewId
         const data = req.body
         const updatedReview = await Review.findByIdAndUpdate(reviewId, { ...data }, { new: true })
 
         if (!updatedReview) {
             throw new ApiError(404, "Product Not Found!")
         }
 
         return res.status(201).json(
             new ApiResponse(200, updatedReview, "The Review has been Updated Successfully!")
         )
 
     } catch (error) {
         throw new ApiError(500, "Error Updating The Review! Try Again.")
     }
 })


export {postReview, deleteReview, getAllReviews, updateReview}
