import { client } from "../index.js";
/**
 * Deletes a cart item from the checkout table.
 * Requires the checkout_id and user_id as parameters in the request body.
 * If the checkout_id or user_id is missing, it returns a 400 status code with an error message.
 * If the cart item is successfully deleted, it returns a 200 status code with a success message.
 * If there is an error, it returns a 500 status code with an error message.
 */
export default async function updateCartItemController(req, res){
    try {
        const user_id = req.user && req.user.id;
        const { id } = req.body;
        const product_id = id;
        if (!id || !user_id) {
            return res.status(400).json({ message: "Missing required fields or not logged in" });
        }
        const updateQuery = 'UPDATE checkout SET product_id = $1 WHERE user_id = $2';
        await client.query(updateQuery, [product_id, user_id]);
        return res.status(200).json({ message: "Cart item updated successfully" });
    } catch (error) {
        console.error("Error updating cart item:", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}