import { validationResult } from "express-validator";
import { ApiError } from "../../utils/ApiError.js";

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ApiError(400, errors.array().map(err => err.msg).join(", "));
    }
    next();
};

export default handleValidationErrors
