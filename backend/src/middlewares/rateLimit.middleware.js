import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit to 10 requests per window per IP
    message: {
        success: false,
        message: "Too many product creation requests, please try again later."
    }
});

export default rateLimiter