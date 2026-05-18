import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { User } from "../../models/user.model.js";

const getUsers= asyncHandler(async(req,res)=>{
    try {
        const page = Number(req.query.page) || 1
        const limit = 10
        const skip = (page - 1) * limit

        const [customers, totalCustomers] = await Promise.all([
            User.aggregate([
                // only get customers, not admins
                { $match: { role: "customer" } },

                // join with orders collection
                {
                    $lookup: {
                        from: "orders",
                        localField: "_id",
                        foreignField: "user",
                        as: "orders"
                    }
                },

                // shape the output
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        email: 1,
                        createdAt: 1,
                        totalOrders: { $size: "$orders" }
                    }
                },

                { $sort: { createdAt: -1 } },
                { $skip: skip },
                { $limit: limit }
            ]),

            User.countDocuments({ role: "customer" })
        ])

        return res.status(200).json(new ApiResponse(200, {
            customers,
            totalCustomers,
            totalPages: Math.ceil(totalCustomers / limit),
            currentPage: page
        }, "Customers fetched successfully!"))

    } catch (error) {
        throw new ApiError(500, "Internal Server Error Occured While fetching users for admin!", error)
    }
})

export {getUsers}