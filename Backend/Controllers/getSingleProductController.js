import { client } from "../index.js";
export default async function getSingleProductController(req, res) {
    try {
        const { id } = req.params;
        const getSingleProductQuery = 'SELECT * FROM products WHERE id = $1';
        const result = await client.query(getSingleProductQuery, [id]);
        if (result.rows.length === 0) return res.status(404).json({ message: "Product not found" });
        return res.json({ product: result.rows[0] });
    } catch (error) {
        console.log("Error fetching product", error);
        return res.json({ message: "Error fetching product", error: error.message });
    }
}