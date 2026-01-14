import { client } from "../index.js";
export default async function storeUserOrderController(req, res){
    try {
        const user_id = req.user.id;
        const { products, totalAmount } = req.body;
        const created_at = new Date();
        const query = `
            INSERT INTO orders (user_id, products, total_amount, created_at)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [user_id, products, totalAmount, created_at];
        const result = await client.query(query, values);
        res.status(201).json({ message: 'Order stored successfully', order: result.rows[0] });
    } catch (error) {
        return res.status(500).json({ message: 'Error storing order', error: error.message });
    }
}