import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';

export async function uploadImagesToCloudinary(productFiles) {

    // Configuration
     cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    })

    try {
     let uploadUrlToDatabase = [];
        if (Array.isArray(productFiles) && productFiles.length > 0) {
            for (const file of productFiles) {
                const result = await cloudinary.uploader.upload(file.path);
                uploadUrlToDatabase.push(result.secure_url); // use secure_url for https
                
                // Clean up local file after upload
                fs.unlinkSync(file.path);
            }
        }
        return uploadUrlToDatabase;
    } catch (error) {
        console.log("Error uploading images to Cloudinary", error);
        throw error;
    }
}