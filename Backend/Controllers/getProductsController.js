import { client } from "../index.js";
/**
 * Retrieves all products from the database and returns them in the response body.
 * Returns a status code of 200 if successful and a status code of 500 if there is an error.
 */
export default async function getProductsController(req, res) {
    try {

        const getProductsQuery = 'SELECT * FROM products';
        const result = await client.query(getProductsQuery);
        if (result.rows.length === 0)return res.status(404).json({ message: "No products found" });
        return res.status(200).json({ products: result.rows });
    } catch (error) {
        console.log("Error fetching products", error);
        return res.json({ message: "Error fetching products", error: error.message });
    }
}