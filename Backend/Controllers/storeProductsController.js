
import { client } from "../index.js";
import { uploadImagesToCloudinary } from '../Utils/cloudinary.js';
/**
 * Stores a product in the database.
 * The function takes the product details and images from the request body and files respectively.
 * It uploads the images to Cloudinary and stores the image URLs as a JSON string in the database.
 * If the product is successfully stored, it returns a 201 status code with a message saying "Product stored" and the uploaded image URLs.
 * If there is an error, it returns a 500 status code with the error message.
 * @param {Object} req - The request object containing the product details and images.
 * @param {Object} res - The response object to send the response back to the client.
 * @returns {Promise<Object>} - A promise that resolves to the response object.
 */
export default async function storeProductsController(req, res) {
    try {
        const productFiles = req.files || []; // multer sets req.files when using upload.array()
        
        const { name, brand, description, category, price } = req.body;
        
        // Upload images to Cloudinary
        const uploadedImages = await uploadImagesToCloudinary(productFiles);
        const images = JSON.stringify(uploadedImages); // Store as JSON string
        
        const user_id = req.user && req.user.id; 
        if (!name || !brand || !description || !category || !price || uploadedImages.length === 0) {
            return res.status(400).json({ message: "All fields are required including at least one image." });
        }

        const insertProductQuery = 'INSERT INTO products (brand, category, name, description, user_id, price, images) VALUES ($1, $2, $3, $4, $5, $6, $7)';
        await client.query(insertProductQuery, [brand, category, name, description, user_id, price, images]);
        return res.status(201).json({ message: 'Product stored', images: uploadedImages });
    } catch (error) {
        console.log("Error storing product", error);
        return res.json({ message: "Error storing product", error: error.message });
    }

}