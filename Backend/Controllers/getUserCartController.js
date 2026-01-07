import { client } from "../index.js";
export default async function getUserCartController(req, res){
    try {
        const user_id = req.user.id;
        const cartQuery = 'SELECT * FROM checkout WHERE user_id = $1';
        const cartItems = await client.query(cartQuery, [user_id]);
        return res.status(200).json({ items: cartItems.rows });
    } catch (error) {
        console.error("Error retrieving user cart:", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}