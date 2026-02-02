import { client } from "../index.js";
/**
 * Deletes a cart item from the wishlist table.
 * Requires the checkout_id and user_id as parameters in the request body.
 * If the checkout_id or user_id is missing, it returns a 400 status code with an error message.
 * If there is an error deleting the cart item, it returns a 500 status code with an error message.
 * If successful, it returns a 200 status code with a success message.
 */
export default async function updateWishlistItemsController(req, res){
    try {
            const user_id = req.user && req.user.id;
            const { id } = req.body;
            const product_id = id;
            
            if (!id || !user_id) {
                return res.status(400).json({ message: "Missing required fields or not logged in" });
            }
            const updateQuery = 'UPDATE wishlist SET product_id = $1 WHERE user_id = $2';
            await client.query(updateQuery, [product_id, user_id]);
            return res.status(200).json({ message: "Wishlist item updated successfully" });
        } catch (error) { 
            console.error("Error deleting cart item:", error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
} 