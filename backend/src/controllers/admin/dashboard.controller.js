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
        }).select("_id");
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
        // const topCustomers = await Order.aggregate([
        //     { $match: { createdAt: { $gte: start, $lte: end } } },
        //     {
        //         $group: {
        //             _id: "$user",
        //             totalSpent: { $sum: "$totalAmount" },
        //             orderCount: { $sum: 1 }
        //         }
        //     },
        //     { $sort: { totalSpent: -1 } },
        //     { $limit: 4 },
        //     {
        //         $lookup: {
        //             from: "users",
        //             localField: "_id",
        //             foreignField: "_id",
        //             as: "user"
        //         }
        //     },
        //     { $unwind: "$user" },
        //     {
        //         $project: {
        //             _id: 0,
        //             userId: "$_id",
        //             name: "$user.name",
        //             email: "$user.email",
        //             totalSpent: 1,
        //             orderCount: 1
        //         }
        //     }
        // ]);

        const topCustomers = await Order.aggregate([
            {
                $match: {
                    createdAt: { $gte: start, $lte: end }
                }
            },
            {
                $group: {
                    _id: { user: "$user", city: "$shippingInfo.city" },
                    totalSpentByCity: { $sum: "$totalAmount" },
                    orderCountByCity: { $sum: 1 }
                }
            },
            {
                $group: {
                    _id: "$_id.user",
                    totalSpent: { $sum: "$totalSpentByCity" },
                    orderCount: { $sum: "$orderCountByCity" },
                    cities: {
                        $push: {
                            city: "$_id.city",
                            count: "$orderCountByCity"
                        }
                    }
                }
            },
            {
                $addFields: {
                    mostUsedCity: {
                        $reduce: {
                            input: "$cities",
                            initialValue: { city: null, count: 0 },
                            in: {
                                $cond: [
                                    { $gt: ["$$this.count", "$$value.count"] },
                                    "$$this",
                                    "$$value"
                                ]
                            }
                        }
                    }
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
                    orderCount: 1,
                    city: "$mostUsedCity.city"
                }
            }
        ]);


        // Conversion Rate

        const newCustomerIds = newCustomers.map(user => user._id);
        // Find how many of these new customers placed at least one order
        const convertedNewCustomers = await Order.find({
            user: { $in: newCustomerIds },
            createdAt: { $gte: start, $lte: end }
        }).distinct("user");

        const conversionRate = newCustomersCount > 0
            ? ((convertedNewCustomers.length / newCustomersCount) * 100).toFixed(2)
            : 0;



        return res.status(201).json(new ApiResponse(200, { totalOrdersCount, totalSales, newCustomersCount, topProducts, topCustomers, conversionRate }, "Dashboard stats Successfully fetched!"))

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


// const getTopProducts = async (req, res) => {
//     try {
//         const { startDate, endDate } = req.query;

//         if (!startDate || !endDate) {
//             return res.status(400).json({ message: "Start date and end date are required." });
//         }

//         const start = new Date(startDate);
//         const end = new Date(endDate);
//         end.setHours(23, 59, 59, 999); // Include the full end date

//         // Fetch orders within date range
//         const orders = await Order.find({
//             createdAt: { $gte: start, $lte: end }
//         }).populate("products.product");

//         const productSalesMap = new Map();

//         orders.forEach(order => {
//             order.products.forEach(item => {
//                 if (!item.product) return; // skip if product is deleted

//                 const productId = item.product._id.toString();
//                 const productName = item.product.name;
//                 const quantity = item.quantity;

//                 if (productSalesMap.has(productId)) {
//                     productSalesMap.get(productId).quantity += quantity;
//                 } else {
//                     productSalesMap.set(productId, {
//                         productId,
//                         name: productName,
//                         quantity
//                     });
//                 }
//             });
//         });

//         // Convert Map to Array, sort by quantity, and get top 4
//         const topProducts = Array.from(productSalesMap.values())
//             .sort((a, b) => b.quantity - a.quantity)
//             .slice(0, 4);

//         return res.status(200).json({ topProducts });
//     } catch (error) {
//         console.error("Error fetching top selling products:", error);
//         res.status(500).json({ message: "Internal server error." });
//     }
// };


const getTopProducts = asyncHandler(async (req, res) => {
    const { startDate, endDate } = req.query;

    if (!startDate || !endDate) {
        throw new ApiError(400, "Start date and end date are required!");
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    try {
        const topProducts = await Order.aggregate([
            { $match: { createdAt: { $gte: start, $lte: end } } },
            { $unwind: "$products" },
            {
                $group: {
                    _id: "$products.product",
                    totalQuantity: { $sum: "$products.quantity" }
                }
            },
            { $sort: { totalQuantity: -1 } },
            { $limit: 4 },
            {
                $lookup: {
                    from: "products", // should match the collection name in MongoDB
                    localField: "_id",
                    foreignField: "_id",
                    as: "productInfo"
                }
            },
            { $unwind: "$productInfo" },
            {
                $project: {
                    _id: 0,
                    productId: "$productInfo._id",
                    name: "$productInfo.name",
                    totalQuantity: 1
                }
            }
        ]);

        return res.status(200).json(
            new ApiResponse(200, topProducts, "Top selling products fetched successfully")
        );
    } catch (error) {
        console.error("Error fetching top selling products", error);
        throw new ApiError(500, "Error fetching top selling products");
    }
});


const getTopCustomers = asyncHandler(async (req, res) => {

})


const getRecentOrders = asyncHandler(async (req, res) => {
    const { startDate, endDate } = req.query
    if (!startDate || !endDate) {
        throw new ApiError(400, "Start date and end date are required!")
    }

    const start = new Date(startDate)
    const end = new Date(endDate)

    try {
        const orders = await Order.find({
            createdAt: {
                $gte: start,
                $lte: end
            }
        })
            // sorts the orders in descending order(recent ones come first)
            .sort({ createdAt: -1 })
            .limit(5)
            // select only id, creation date total amount and status of order
            .select('_id createdAt totalAmount orderStatus')
            // adding user' name by using the external reference of his id
            .populate({
                path: 'user',
                select: 'name'
            })

        return res.status(201).json(new ApiResponse(200, orders, "Recent orders have been fetched successfully!"))

    } catch (error) {
        console.log(error)
        throw new ApiError(500, "The recent orders can not be fetched successfully due to some internal server issue", error)
    }
})

const getRevenueAnalytics = asyncHandler(async (req, res) => {
    const { startDate, endDate } = req.query
    if (!startDate || !endDate) {
        throw new ApiError(400, "Start date and end date are required!");
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    try {
        const data = await Order.aggregate([
            {
                $match: {
                    createdAt: { $gte: start, $lte: end }
                }
            },
            {
                $group: {
                    _id: {
                        $dateToString: { format: "%d %b", date: "$createdAt" }
                    },
                    totalRevenue: { $sum: "$totalAmount" },
                    orderCount: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ])

        const chartData = data.map(entry => ({
            date: entry._id,
            revenue: entry.totalRevenue,
            orders: entry.orderCount
        }))

        return res.status(201).json(new ApiResponse(200, chartData, "Revenue Analytics have been fetched successfully!"))

    } catch (error) {
        console.log(error)
        throw new ApiError(500, "There was an internal server error while trying to fetch the revenue analytics", error)
    }
})


export { getDashboardStats, getTopProducts, getRecentOrders, getRevenueAnalytics }