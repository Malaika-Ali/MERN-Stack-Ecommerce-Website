import mongoose, { Schema } from "mongoose";
// import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const reviewSchema = new Schema({
    comment: {
        type: String,
        required: [true, "Review is Required"]
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    rating: {
        type: Number,
        default: 0
    },
},
    { timestamps: true })

// This allows us to write aggregation queries
// productSchema.plugin(mongooseAggregatePaginate)

export const Review = mongoose.model("Review", reviewSchema)