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
        paymentMethod:{
            type: String,
            required: true
        },
        cardNumber: {
          type: String,
        },
        expiryDate: {
          type: String,
        },
        cvv: {
          type: String,
        },
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

// This allows us to write aggregation queries
// productSchema.plugin(mongooseAggregatePaginate)

export const Order = mongoose.model("Order", orderSchema)