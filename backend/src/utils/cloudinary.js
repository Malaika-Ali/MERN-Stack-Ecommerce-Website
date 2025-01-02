import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// cloudinary.v2.uploader.upload(,{}, function (error,result){ console.log(result);})

const uploadOnCloudinary= async (localFilePath) => {
    try {
        if (!localFilePath) return null
        // upload the file on cloudinary
        const response= await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("File has been uploaded successfully on Cloudinary", response.url)
        console.log(response)
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        // remove the locally saved temporary file as the upload operation got failed
        fs.unlinkSync(localFilePath)
        return null
    }
}

export {uploadOnCloudinary}

