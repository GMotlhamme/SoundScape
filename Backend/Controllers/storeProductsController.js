
import { client } from "../index.js";
import { uploadImagesToCloudinary } from '../Utils/cloudinary.js';
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