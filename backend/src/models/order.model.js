    import mongoose, { Schema } from "mongoose";

    const orderSchema = new Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        products: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    default: 1,
                },
                size:{
                    type: String,
                },
                price: {
                    type: Number,
                    required: true,
                },
            },
        ],
        shippingInfo: {
            name: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            phoneNumber: {
                type: Number,
                required: true,
            },
            address: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            postalCode: {
                type: String,
                required: true,
            },
        },
        paymentInfo: {
            paymentMethod: {
                type: String,
                required: true,
                enum: ['COD', 'CreditCard/DebitCard', 'Stripe'], 
            },
            cardNumber: {
                type: String,
                // required: function () {
                //     return this.paymentMethod !== 'COD'; // Only required if paymentMethod is not COD
                // },
            },
            expiryDate: {
                type: String,
                // required: function () {
                //     return this.paymentMethod !== 'COD'; // Only required if paymentMethod is not COD
                // },
            },
            cvv: {
                type: String,
                // required: function () {
                //     return this.paymentMethod !== 'COD'; // Only required if paymentMethod is not COD
                // },
            },
            cardHolderName:{
                type: String
            }
        },
        totalAmount: {
            type: Number,
            required: true,
        },
        orderStatus: {
            type: String,
            enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
            default: 'Pending',
        },
    },
        { timestamps: true })


    export const Order = mongoose.model("Order", orderSchema)