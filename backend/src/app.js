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

app.use("/api/v1/users", userRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/reviews", reviewRouter)



app.get('/auth/google/callback', async (req, res) => {
    const code = req.query.code; // Extract authorization code from the URL
    try {
        const { tokens } = await oauth2Client.getToken(code); // Exchange code for tokens
        oauth2Client.setCredentials(tokens); // Set tokens to the OAuth2 client

        // Retrieve user info
        const userInfo = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`
        );
        console.log(userInfo.data);

        // Handle user login/registration logic
        res.send('Login successful!');
    } catch (error) {
        console.error('Error during Google OAuth callback:', error);
        res.status(500).send('Authentication failed');
    }
});

export {app}