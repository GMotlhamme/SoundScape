import { client } from "../index.js";
export default async function getProductsController(req, res) {
    try {

        const getProductsQuery = 'SELECT * FROM products';
        const result = await client.query(getProductsQuery);
        return res.status(200).json({ products: result.rows });
    } catch (error) {
        console.log("Error fetching products", error);
        return res.json({ message: "Error fetching products", error: error.message });
    }
}