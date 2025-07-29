import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { ApiError } from "../../utils/ApiError.js";
import { Order } from "../../models/order.model.js";
import { User } from "../../models/user.model.js";


const getDashboardStats = asyncHandler(async (req, res) => {
    const { startDate, endDate } = req.query

    if (!startDate || !endDate) {
        throw new ApiError(400, "Start date and end date are required!")
    }

    const start = new Date(startDate)
    const end = new Date(endDate)

    try {
        const totalOrders = await Order.find({
            createdAt: {
                $gte: start,
                $lte: end
            }
        })
        const totalOrdersCount = totalOrders.length

        // Total Sales
        const totalSales = totalOrders.reduce((sum, order) => sum + order.totalAmount, 0);

        // Total new customers
        const newCustomers = await User.find({
            createdAt: { $gte: start, $lte: end }
        });
        const newCustomersCount = newCustomers.length

        // Top 4 Selling Products
        const topProducts = await Order.aggregate([
            { $match: { createdAt: { $gte: start, $lte: end } } },
            { $unwind: "$items" }, // assuming order.items is an array
            {
                $group: {
                    _id: "$items.productId",
                    quantitySold: { $sum: "$items.quantity" },
                    revenue: { $sum: { $multiply: ["$items.quantity", "$items.price"] } }
                }
            },
            { $sort: { quantitySold: -1 } },
            { $limit: 4 },
            {
                $lookup: {
                    from: "products",
                    localField: "_id",
                    foreignField: "_id",
                    as: "product"
                }
            },
            { $unwind: "$product" },
            {
                $project: {
                    _id: 0,
                    productId: "$_id",
                    name: "$product.name",
                    quantitySold: 1,
                    revenue: 1
                }
            }
        ]);

        // Top 4 Customers
        const topCustomers = await Order.aggregate([
            { $match: { createdAt: { $gte: start, $lte: end } } },
            {
                $group: {
                    _id: "$user",
                    totalSpent: { $sum: "$totalAmount" },
                    orderCount: { $sum: 1 }
                }
            },
            { $sort: { totalSpent: -1 } },
            { $limit: 4 },
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "_id",
                    as: "user"
                }
            },
            { $unwind: "$user" },
            {
                $project: {
                    _id: 0,
                    userId: "$_id",
                    name: "$user.name",
                    email: "$user.email",
                    totalSpent: 1,
                    orderCount: 1
                }
            }
        ]);


        return res.status(201).json(new ApiResponse(200, { totalOrdersCount, totalSales, newCustomersCount }, "Dashboard stats Successfully fetched!"))

    }
    catch (e) {
        console.log("error in fetching the dashboard stats")
        throw new ApiError(500, "There was error in fetching the stats", error)
    }
})


// const getTopProducts = async (req, res) => {
//     const { startDate, endDate } = req.query

//     if (!startDate || !endDate) {
//         throw new ApiError(400, "Start date and end date are required!")
//     }

//     const start = new Date(startDate)
//     const end = new Date(endDate)

//     try {
//         // Top 4 Selling Products
//         // const topProducts = await Order.aggregate([
//         //     { $match: { createdAt: { $gte: start, $lte: end } } },
//         //     { $unwind: "$items" }, // assuming order.items is an array
//         //     {
//         //         $group: {
//         //             _id: "$items.productId",
//         //             quantitySold: { $sum: "$items.quantity" },
//         //             revenue: { $sum: { $multiply: ["$items.quantity", "$items.price"] } }
//         //         }
//         //     },
//         //     { $sort: { quantitySold: -1 } },
//         //     { $limit: 4 },
//         //     {
//         //         $lookup: {
//         //             from: "products",
//         //             localField: "_id",
//         //             foreignField: "_id",
//         //             as: "product"
//         //         }
//         //     },
//         //     { $unwind: "$product" },
//         //     {
//         //         $project: {
//         //             _id: 0,
//         //             productId: "$_id",
//         //             name: "$product.name",
//         //             quantitySold: 1,
//         //             revenue: 1
//         //         }
//         //     }
//         // ]);

//         // ✅ Fetch the orders first
//         // const orders = await Order.find({
//         //     createdAt: { $gte: start, $lte: end }
//         // }).populate('products.product'); // Assuming your Order model has products with a `product` field that references Product

//         const orders = await Order.find({
//             createdAt: { $gte: start, $lte: end }
//         });

//         await Order.populate(orders, {
//             path: "products.product"
//         });

//         const productSalesMap = new Map();

//         orders.forEach(order => {
//             order.products.forEach(item => {
//                 const productId = item.product._id.toString(); // populated
//                 const productName = item.product.name; // populated
//                 const quantity = item.quantity;

//                 if (productSalesMap.has(productId)) {
//                     productSalesMap.get(productId).quantity += quantity;
//                 } else {
//                     productSalesMap.set(productId, {
//                         productId,
//                         name: productName,
//                         quantity,
//                     });
//                 }
//             });
//         });

//         const topSellingProducts = Array.from(productSalesMap.values())
//             .sort((a, b) => b.quantity - a.quantity)
//             .slice(0, 4);

//         console.log(topSellingProducts)

//         return res.status(201).json(new ApiResponse(200, topSellingProducts, "Top 4 selling products have been Successfully fetched!"))

//     } catch (error) {
//         console.log("There was an error while fetching the top products", error)
//         throw new ApiError(500, "There was an error in  fetching the top products", error)
//     }

// }


const getTopProducts = async (req, res) => {
    try {
        const { startDate, endDate } = req.query;

        if (!startDate || !endDate) {
            return res.status(400).json({ message: "Start date and end date are required." });
        }

        const start = new Date(startDate);
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999); // Include the full end date

        // Fetch orders within date range
        const orders = await Order.find({
            createdAt: { $gte: start, $lte: end }
        }).populate("products.product");

        const productSalesMap = new Map();

        orders.forEach(order => {
            order.products.forEach(item => {
                if (!item.product) return; // skip if product is deleted

                const productId = item.product._id.toString();
                const productName = item.product.name;
                const quantity = item.quantity;

                if (productSalesMap.has(productId)) {
                    productSalesMap.get(productId).quantity += quantity;
                } else {
                    productSalesMap.set(productId, {
                        productId,
                        name: productName,
                        quantity
                    });
                }
            });
        });

        // Convert Map to Array, sort by quantity, and get top 4
        const topProducts = Array.from(productSalesMap.values())
            .sort((a, b) => b.quantity - a.quantity)
            .slice(0, 4);

        return res.status(200).json({ topProducts });
    } catch (error) {
        console.error("Error fetching top selling products:", error);
        res.status(500).json({ message: "Internal server error." });
    }
};

export { getDashboardStats, getTopProducts }