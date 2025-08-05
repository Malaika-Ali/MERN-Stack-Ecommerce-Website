import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { Product } from "../../models/product.model.js";

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

export { getAllProductsForAdmin }