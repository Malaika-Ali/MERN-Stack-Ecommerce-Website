import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { Product } from "../../models/product.model.js";
import { uploadOnCloudinary } from "../../utils/cloudinary.js";

const getProductsStats= asyncHandler(async(req,res)=>{
    try {
        const [totalProducts, outOfStockProducts, inStockProducts, bestSellingProducts]=await Promise.all([
            Product.countDocuments(),
            Product.countDocuments({quantity: 0}),
            Product.countDocuments({quantity: {$gt: 0}}),
            Product.countDocuments({rating: { $gte: 4}})
        ])

        return res.status(200).json(new ApiResponse(200,
            {
                totalProducts,
                outOfStockProducts,
                inStockProducts,
                bestSellingProducts
            }, "Products Stats Fetched Successfully!"
        ))
    } catch (error) {
        throw new ApiError(500, "Products' stats could not be fetched!")
    }
})

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
        // Run count and fetch in parallel for performance
        const [totalProducts, products] = await Promise.all([
            Product.countDocuments(filter),
            Product.find(filter, projection)
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

const updateProduct = asyncHandler(async (req, res) => {
    // const { productName, price, color, material, fabric, quantity } = req.body
    const id = req.params.id

    // const updatedData = {
    //     ...req.body
    // }

    // if (req.file) {
    //     updatedData.image = req.file.path;
    // }

    try {
        const product = await Product.findById(id)
        if (!product) {
            throw new ApiError(404, "Product Not Found!")
        }

        Object.keys(req.body).forEach((key) => {
            product[key] = req.body[key];
        });

        if (req.file) {
            const img = req.file.path
            const uploadedURL = await uploadOnCloudinary(img)
            if (uploadedURL?.secure_url) {
                product.images[0] = uploadedURL?.secure_url;
            }

            // product.images[0] = req.file.path;

        }

        const name = req.body.name
        const fabric = req.body.fabric
        const color = req.body.color
        const price = req.body.price
        const stock = req.body.stock

        if (name) {
            product.productName = name
        }
        if (fabric) {
            product.fabric = fabric
        }
        if (stock) {
            product.quantity = stock
        }
        if (price) {
            product.price = price
        }
        if (color) {
            product.color = color
        }


        await product.save();

        return res.status(201).json(new ApiResponse(200, product, "Product Updated successfully!"))

    } catch (error) {
        throw new ApiError(500, "Internal Server Error")
    }



})

export { getAllProductsForAdmin, addProduct, updateProduct, getProductsStats }