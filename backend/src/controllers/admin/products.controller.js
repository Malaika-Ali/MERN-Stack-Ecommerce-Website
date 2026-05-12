import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { Product } from "../../models/product.model.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";

const getAllProductsForAdmin = asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit

    const filter = {};
    if (req.query.status === "out-of-stock") {
        filter.quantity = 0;                  // quantity = 0 means out of stock
    } else if (req.query.status === "in-stock") {
        filter.quantity = { $gt: 0 };         // quantity > 0 means in stock
    }
    // if "All" or nothing, filter stays {} — fetches everything


    const projection = {
        _id: 1,
        productName: 1,
        images: 1,
        category: 1,
        quantity: 1,
        price: 1,
        color: 1,
        fabric: 1,
        material: 1,
        createdAt: 1,
    };

    try {
        // const totalProducts= await Product.countDocuments(filter)
        // const products = await Product.find({}, {
        //     _id: 1,
        //     productName: 1,
        //     images: 1,
        //     category: 1,
        //     quantity: 1,
        //     price: 1,
        //     color: 1,
        //     fabric: 1,
        //     material: 1,
        //     createdAt: 1
        // }).sort({ createdAt: -1 });

        // Run count and fetch in parallel for performance
        const [totalProducts, products] = await Promise.all([
            Product.countDocuments(filter),
            Product.find(filter,projection)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit),
        ]);

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

        // res.status(200).json({
        //     success: true,
        //     data: formattedProducts
        // });

        return res.status(200).json(
            new ApiResponse(200,
                {
                    formattedProducts,
                    totalProducts,
                    totalPages: Math.ceil(totalProducts / limit),
                    currentPage: page
                },
                `All ${limit} Products have been fetched successfully!`
            )
        )

    } catch (error) {
        throw new ApiError(500, "Internal Server Error while fetching all the orders! Try again", error);
    }
});

const addProduct = asyncHandler(async (req, res) => {
    const { productName, description, price, color, category, material, fabric, quantity } = req.body

    if (!req.files || req.files.length === 0) {
        throw new ApiError(400, "Atleast one image is required!")
    }

    const imagesLocalPaths = req.files
        .filter(file => file && file.path)
        .map(file => file.path);
    const uploadedImages = [];

    // const imagesLocalPaths = req.files?.map((file) => file?.path)
    for (const path of imagesLocalPaths) {
        const result = await uploadOnCloudinary(path);

        if (result?.secure_url) {
            uploadedImages.push(result.secure_url);
        }
    }
    if (uploadedImages.length === 0) {
        throw new ApiError(500, "Image upload failed");
    }

    // const cloudinaryImagesURL = await imagesLocalPaths?.map((path) => uploadOnCloudinary(path))

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
            images: uploadedImages
        })

        console.log(`The product while saving to database ${product}`)

        return res.status(201).json(new ApiResponse(200, product, "Product successfully created!"))

    } catch (error) {
        console.log(error)
        throw new ApiError(500, "There was an internal server error while creating the product, please try again!")

    }
})

export { getAllProductsForAdmin, addProduct }