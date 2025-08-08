import { body } from "express-validator";

export const validateAddProduct = [
    body("productName")
        .trim()
        .notEmpty().withMessage("Product name is required")
        .isLength({ min: 3 }).withMessage("Product name must be at least 3 characters"),

    body("description")
        .trim()
        .notEmpty().withMessage("Description is required"),

    body("price")
        .notEmpty().withMessage("Price is required")
        .isFloat({ gt: 0 }).withMessage("Price must be a positive number"),

    body("color")
        .trim()
        .notEmpty().withMessage("Color is required"),

    body("category")
        .trim()
        .notEmpty().withMessage("Category is required"),

    body("quantity")
        .notEmpty().withMessage("Quantity is required")
        .isInt({ min: 1 }).withMessage("Quantity must be at least 1"),

    body().custom((value, { req }) => {
        if (!req.files || req.files.length === 0) {
            throw new Error("At least one image is required");
        }
        return true;
    })
];
