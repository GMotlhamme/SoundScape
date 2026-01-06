import { client } from "../index.js"; 
import { uploadImagesToCloudinary } from "../Utils/cloudinary.js";
export default async function updateProductInfoController(req, res) {
    try {
        const productFiles = req.files || [];
        const { id } = req.params;
        const { name, price, brand, category } = req.body;
        const images = uploadImagesToCloudinary(productFiles);
        const updateProductQuery = 'UPDATE products SET name = $1, price = $2, brand = $3, category = $4, images = $5 WHERE id = $6';
        await client.query(updateProductQuery, [name, price, brand, category, JSON.stringify(images), id]);
        return res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
        return res.json({ message: "Error updating product", error: error.message });
    }
}