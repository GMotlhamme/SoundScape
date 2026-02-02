import { client } from "../index.js";
/**
 * Retrieves the user's cart items.
 * Returns a JSON object with a message and a list of cart items.
 * If there is an error, returns a 500 status code with the error message.
 */
export default async function getUserCartController(req, res) {
    try {
        const user_id = req.user && req.user.id;
        const cartQuery = 'SELECT * FROM checkout WHERE user_id = $1';
        const result = await client.query(cartQuery, [user_id]);
        if (result.rows.length === 0 || !result.rows) {
            return res.status(200).json({ message: "No cart items found" })
        }
        const cart = result.rows.map(item => item.product_id);
        
        if (cart[0].includes(",")) {
            const cartItemList = cart.map(item => item.split(',')).flat();
            const cartItemsInt = cartItemList.map(item => parseInt(item));
            return res.status(200).json({ items: result.rows, itemIds: cartItemsInt });
        } else {
            const cartItemsInt = cart.map(item => parseInt(item));
            return res.status(200).json({ items: result.rows, itemIds: cartItemsInt });
        }
        } catch (error) {
            console.error("Error retrieving user cart:", error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
    }