import mongoose, {Schema} from "mongoose";
// import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const productSchema= new Schema({
    // images:{
    //     type: String,
    //     // required: [true, "Thumbnail is Required"]
    // },
    images:{
        type: [String],
        required: [true, "Images of Products are required!"]
    },
    productName:{
        type: String,
        required: [true, " Product Name is Required"]
    },
    description:{
        type: String,
        // required: [true, "Product Description is Required"]
    },
    price:{
        type: Number,
        required: [true , "Product's price is required"]
    },
    color:{
        type: String,
    },
    category:{
        type: String,
        required: [true , "Product's category is required"]
    },
    quantity:{
        type: Number,
        default: 0
    },
    rating:{
        type: Number,
        default: 0
    },
},
{timestamps: true})

// This allows us to write aggregation queries
// productSchema.plugin(mongooseAggregatePaginate)

export const Product=mongoose.model("Product", productSchema)