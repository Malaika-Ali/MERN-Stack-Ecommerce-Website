import {connectDB} from '../src/database/index.js'
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

connectDB()