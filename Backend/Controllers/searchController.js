import { client } from "../index.js";
import convertProductData from "../Utils/converter.js";
/**
 * Searches for products with a name containing the given query.
 * The search is case-insensitive and uses the ILIKE operator.
 * If no products are found, returns a 404 status code with a message saying "No products found".
 * If there is an error, returns a 500 status code with the error message.
 * If successful, returns a 200 status code with a JSON object containing the search results.
 */
export default async function searchController(req, res) {
    try {
        const { query } = req.params;
        const searchQuery = 'SELECT brand, category, name, price, images FROM products WHERE name ILIKE $1';
        const result = await client.query(searchQuery, [`%${query}%`]);//prevent SQL injection by using parameterized query. the query value isn't inserted directly into the SQL string
        result.rows.forEach(product => {
            convertProductData(product);
        });
        return res.json({products: result.rows});
    } catch (error) {
        console.log("Error searching products", error);
        return res.json({ message: "Error searching products", error: error.message });
    }
}