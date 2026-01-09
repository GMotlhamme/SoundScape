import { client } from "../index.js";
export default async function updateCartItemController(req, res){
    try {
        const user_id = req.user.id;
        const { id } = req.body;
        const checkout_id = id;
        if (!id || !user_id) {
            return res.status(400).json({ message: "Missing required fields or not logged in" });
        }
        const updateQuery = 'DELETE FROM checkout WHERE checkout_id = $1 AND user_id = $2';
        await client.query(updateQuery, [checkout_id, user_id]);
        return res.status(200).json({ message: "Cart item deleted successfully" });
    } catch (error) {
        console.error("Error deleting cart item:", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}