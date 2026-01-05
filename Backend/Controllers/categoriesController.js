import { client } from "../index.js";
/**
 * Retrieves all products from a given category.
 * Returns a JSON object with a message and a list of products.
 * If there are no products in the category, returns a 404 status code with a message saying "No products found in this category".
 * If there is an error, returns a 500 status code with the error message.
 */
export default async function categoriesController(req, res){
    try {
        const { category } = req.params;
        const getCategoriesQuery = 'SELECT name, price, brand, category, images FROM products WHERE category = $1 ORDER BY created_at DESC LIMIT 16 OFFSET 16';
        const result = await client.query(getCategoriesQuery, [category]);
        if (result.rows.length === 0) return res.status(404).json({ message: "No products found in this category" });
        return res.status(200).json({ products: result.rows });
    } catch (error) {
        console.log("Error fetching categories", error);
        return res.json({ message: "Error fetching categories", error: error.message });
    }
}