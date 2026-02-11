import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoSanitize from "express-mongo-sanitize";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// configuartion to accept form data in the form of json
app.use(express.json({
    limit: "16kb"
}))

// handle data coming from URLs like params
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

// For sanitizing the sql/no sql injection in the upcoming data
app.use(mongoSanitize());


// folder to keep files like images or pdfs
app.use(express.static("public"))

app.use(cookieParser())


// routes
import userRouter from "../src/routes/user.routes.js"
import authRouter from "../src/routes/auth.routes.js"

import productRouter from "../src/routes/customers/product.routes.js"
import reviewRouter from "../src/routes/customers/review.routes.js"
import orderRouter from "../src/routes/customers/order.routes.js"
import searchRouter from "../src/routes/customers/search.route.js"
import paymentRouter from "../src/routes/customers/payment.route.js"

import dashboardRouter from "../src/routes/admin/dashboard.routes.js"
import adminProductRouter from "../src/routes/admin/product.routes.js"
import adminOrderRouter from "../src/routes/admin/order.routes.js"

app.use("/api/v1/users", userRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/reviews", reviewRouter)
app.use("/api/v1/orders", orderRouter)
app.use("/api/v1", searchRouter)
app.use("/api/v1/payment", paymentRouter)
// admin routes
app.use("/api/v1/admin/dashboard", dashboardRouter)
app.use("/api/v1/admin/products", adminProductRouter)
app.use("/api/v1/admin", adminOrderRouter)




export { app }