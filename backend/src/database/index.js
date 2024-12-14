import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

export const connectDB= async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // We log this information regarding the host of the connection to make sure we have connected to the right host(for eg. host of development, testing or deployment)
        console.log(`\n Mongo DB connected !!! DB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB Connection Error", error)
        throw error

    }
}

