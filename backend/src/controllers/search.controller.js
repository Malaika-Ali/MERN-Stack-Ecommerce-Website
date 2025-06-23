import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Product } from "../models/product.model.js";


// Steps for implementing serach functionality
// 1. User types a string in the search input
// 2. The api endpoint is triggered after 2 seconds since the user stops typing
// 3. The request to this search api contains a serach string
// 4. We have to extract that search string from the request and assign it to a variable
// 5. Validate the search string
// 6. Search for product name or category or price matching that search string in the database
// 7. Retrieve the products containing that search string anywhere in their info
// 8. Make an array of these products
// 9. Return to users long with response
// 10. If nothing matching that search string is available in the databse throw an error


const searchProduct = asyncHandler(async (req, res) => {

    const searchTerm = req.query.q

    try {
        const exactProduct = await Product.findOne({ productName: { $regex: `^${searchTerm}$`, $options: 'i' } });
        if (exactProduct) {
            // If exact match found, return it as a single-item array
            return res.status(200).json(
                new ApiResponse(200, [exactProduct], "Exact product match found")
            );
        }

        // 2. Otherwise, do a regex search
        const products = await Product.find({
            $or: [
                { productName: { $regex: searchTerm, $options: 'i' } },
                // { price: { $regex: searchTerm, $options: 'i' } },
                { color: { $regex: searchTerm, $options: 'i' } },
                { category: { $regex: searchTerm, $options: 'i' } },
                { material: { $regex: searchTerm, $options: 'i' } },
                { fabric: { $regex: searchTerm, $options: 'i' } },
            ]
        })

        return res.status(201).json(
            new ApiResponse(200, products, "Products Searched Successfully!")
        )

    } catch (error) {
        throw new ApiError(500, "Products couldn't be searched", error)

    }
})


export { searchProduct }