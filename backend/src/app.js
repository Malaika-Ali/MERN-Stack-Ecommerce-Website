import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app=express()

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

// folder to keep files like images or pdfs
app.use(express.static("public"))

app.use(cookieParser())


// routes
import userRouter from "../src/routes/user.routes.js"
import authRouter from "../src/routes/auth.routes.js"
import productRouter from "../src/routes/product.routes.js"
import reviewRouter from "../src/routes/review.routes.js"
import orderRouter from "../src/routes/order.routes.js"
import searchRouter from "../src/routes/search.route.js"

app.post('/', (req,res)=>{
    res.send("Hello")
})
app.use("/api/v1/users", userRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/reviews", reviewRouter)
app.use("/api/v1/orders", orderRouter)
app.use("/api/v1/search", searchRouter)


export {app}