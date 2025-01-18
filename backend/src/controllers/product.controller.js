import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { Product } from '../models/product.model.js'
import { Review } from '../models/review.model.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'


const createProduct = asyncHandler(async (req, res) => {
    try {
        const { productName, description, price, color, category, quantity, rating } = req.body

        if (productName === "") {
            throw new ApiError(400, "Product's name is Required!")
        }
        else if (description === "") {
            throw new ApiError(400, "Product's Description is Required!")
        }
        else if (price === "") {
            throw new ApiError(400, "Product's Price is Required!")
        }
        else if (color === "") {
            throw new ApiError(400, "Product's color is Required!")
        }
        else if (category === "") {
            throw new ApiError(400, "Product's category is Required!")
        }
        else if (quantity === "") {
            throw new ApiError(400, "Product's quantity is Required!")
        }

         // Upload images to Cloudinary
         const imagePaths = req.files?.map((file) => file?.path); // Get all local file paths
         const uploadedImages = [];
         
         for (const path of imagePaths) {
             const result = await uploadOnCloudinary(path);
             if (result) {
                 uploadedImages.push(result.url); // Save the Cloudinary URLs
             }
         }


        const product = await Product.create({
            productName,
            description,
            color,
            category,
            price,
            quantity,
            rating,
            images: uploadedImages // Save image URLs
        })

        const createdProduct = await Product.findById(product._id)

        return res.status(201).json(
            new ApiResponse(200, createdProduct, "Product Has Been Created Successfully!")
        )

    } catch (error) {
        throw new ApiError(500, "Product couldn't be Created! Try Again.", error)
    }
})


const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const { category, minPrice, maxPrice, page = 1, limit = 10 } = req.query
        let filter = {}
        if (category && category !== "all") {
            filter.category = category
        }
        if (minPrice && maxPrice) {
            const min = parseFloat(minPrice)
            const max = parseFloat(maxPrice)
            if (!isNaN(min) && !isNaN(max)) {
                filter.price = { $gte: min, $lte: max }
            }
        }

        const skip = (parseInt(page) - 1) * parseInt(limit)

        const allProducts = await Product.countDocuments(filter)

        console.log(`All Products are ${allProducts}`)

        const totalPages = Math.ceil(allProducts / parseInt(limit))

        const products = await Product.find(filter).skip(skip).limit(parseInt(limit)).sort({ createdAt: -1 })

        return res.status(201).json(
            new ApiResponse(200, { products, totalPages, allProducts }, "All Products have been fetched Successfully!")
        )

    } catch (error) {
        throw new ApiError(500, "Error Fetching All The products! Try Again.")
    }
})


const getSingleProduct = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById(id)
        if (!product) {
            throw new ApiError(404, "The product does not exist")
        }

        const reviews = await Review.find({ id }).populate("userId", "name email")
        return res.status(201).json(
            new ApiResponse(200, { product, reviews }, "The Product has been fetched Successfully!")
        )
    } catch (error) {
        throw new ApiError(500, "Error Fetching The product! Try Again.", error)
    }
})


const updateProduct = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const updatedProduct = await Product.findByIdAndUpdate(id, { ...data }, { new: true })

        if (!updatedProduct) {
            throw new ApiError(404, "Product Not Found!")
        }

        return res.status(201).json(
            new ApiResponse(200, updatedProduct, "The Product has been Updated Successfully!")
        )

    } catch (error) {
        throw new ApiError(500, "Error Updating The products! Try Again.")
    }
})


const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const id=req.params.id
        const deletedProduct=await Product.findByIdAndDelete(id)

        if(!deletedProduct){
            throw new ApiError(404, "Product Not Found!")
        }

        // Also delte reviews related to the product
        const deletedReviews=await Review.deleteMany({productId: id})

        return res.status(201).json(
            new ApiResponse(200, {}, "The Product has been deleted Successfully!")
        )

    } catch (error) {
        throw new ApiError(500, "Error Deleting The product! Try Again.")

    }
})


export { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct }