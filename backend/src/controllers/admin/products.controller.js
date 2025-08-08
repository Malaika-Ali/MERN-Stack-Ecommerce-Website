import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { Product } from "../../models/product.model.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";

const getAllProductsForAdmin = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find({}, {
            _id: 1,
            productName: 1,
            images: 1,
            category: 1,
            quantity: 1,
            price: 1,
            color: 1,
            fabric: 1,
            material: 1,
            createdAt: 1
        }).sort({ createdAt: -1 }); // optional: show latest products first

        const formattedProducts = products.map((product) => ({
            id: product._id,
            name: product.productName,
            image: product.images?.[0] || null,
            category: product.category,
            quantity: product.quantity,
            price: product.price,
            color: product.color || null,
            materialOrFabric: product.fabric || product.material || null,
            createdAt: product.createdAt,
        }));

        res.status(200).json({
            success: true,
            data: formattedProducts
        });

    } catch (error) {
        console.error("Error fetching products for admin:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching products"
        });
    }
});

const addProduct = asyncHandler(async (req, res) => {
    const { productName, description, price, color, category, material, fabric, quantity } = req.body
    const { images } = req.files

    if (!productName || !description || !price || !color || !category || (!material && !fabric) || !quantity || images.length == 0) {
        throw new ApiError(400, "Incomplete Product's Information!");
    }

    const imagesLocalPaths = req.files?.map((file) => file?.path)

    const cloudinaryImagesURL = await imagesLocalPaths?.map((path) => uploadOnCloudinary(path))

    try {
        const product = await Product.create({
            productName,
            description,
            price,
            color,
            category,
            material: material || "",
            fabric: fabric || "",
            quantity,
            images: cloudinaryImagesURL?.map((url) => url?.url)
        })

        return res.status(201).json(new ApiResponse(200, product, "Product successfully created!"))

    } catch (error) {
        console.log(error)
        throw new ApiError(500, "There was an internal server error while creating the product, please try again!")

    }
})

export { getAllProductsForAdmin, addProduct }