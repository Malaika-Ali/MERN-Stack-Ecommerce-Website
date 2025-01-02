import {connectDB} from '../src/database/index.js'
import dotenv from 'dotenv'
import {app} from "./app.js"

dotenv.config({
    path: './.env'
})


const port = process.env.PORT || 4000

connectDB()
.then(()=>{
    // Here we are simply listening for an event "error" which can occur if express is unable to connect with mongodb
    app.on("error",(error)=>{
        console.log("Error while connecting MongoDB with Express", error)
        throw error
    })
    app.listen(port, ()=>{
    console.log(`Server is running at port: ${port}`)}
)})
.catch((error)=>console.log(`DB Connection Error inside Promise ${error}`))