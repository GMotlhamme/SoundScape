import { client } from "../index.js";
/**
 * Retrieves a single product by its ID.
 * Returns a JSON object with the product data if found, and a 404 status code with a message saying "Product not found" if not found.
 * If there is an error, returns a 500 status code with the error message.
 */
export default async function getSingleProductController(req, res) {
    try {
        const { id } = req.params; 
        const getSingleProductQuery = 'SELECT * FROM products WHERE id = $1';
        const result = await client.query(getSingleProductQuery, [id]);
        if (result.rows.length === 0) return res.status(404).json({ message: "Product not found" });
        result.rows.forEach(product => {
            if (product.images) {
                product.images = JSON.parse(product.images);
            }
        })
        result.rows.forEach(product => {
            if (product.price) {
                product.price = product.price.split("$")[1];
            }
        })
        const wishlistItems = result.rows.map(item => item.id);
        //convert the values in the array from string to integer
        const wishlistItemsInt = wishlistItems.map(item => parseInt(item));
        return res.json({ product: result.rows[0], wishlistItems: wishlistItemsInt });
    } catch (error) {
        console.log("Error fetching product", error);
        return res.json({ message: "Error fetching product", error: error.message });
    }
}