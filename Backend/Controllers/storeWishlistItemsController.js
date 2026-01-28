import { client } from "../index.js";
/**
 * Stores a product in the wishlist table.
 * Requires the product_id and user_id as parameters in the request body.
 * If the product_id or user_id is missing, it returns a 400 status code with an error message.
 * If there is an error storing the product, it returns a 500 status code with an error message.
 * If successful, it returns a 200 status code with a success message.
 */
export default async function storeWishlistItemsController(req, res){
      try {
            const user_id = req.user.id; 
            const { id } = req.body;
            const product_id = id;
            
            if (!id  || !user_id) {
                return res.status(400).json({ message: "Missing required fields or not logged in" });
            }

            // Check if user already has a wishlist row
            const checkUserQuery = 'SELECT product_id FROM wishlist WHERE user_id = $1';
            const existingRow = await client.query(checkUserQuery, [user_id]);
            
            let productQuery;
            let queryParams;
            
            if (existingRow.rows.length > 0) {
                  // User has existing wishlist - append product_id to existing string
                  const currentProductIds = existingRow.rows[0].product_id || '';
                  const updatedProductIds = currentProductIds 
                        ? `${currentProductIds},${product_id}` 
                        : product_id;
                  
                  productQuery = 'UPDATE wishlist SET product_id = $1 WHERE user_id = $2';
                  queryParams = [updatedProductIds, user_id];
            } else {
                  // User doesn't have wishlist - create new row
                  productQuery = 'INSERT INTO wishlist (user_id, product_id) VALUES ($1, $2)';
                  queryParams = [user_id, product_id];
            }
            
            await client.query(productQuery, queryParams);
            return res.status(200).json({ message: "Wishlist item stored successfully" });
        } catch (error) {
            console.error("Error storing wishlist items:", error);
            return res.status(500).json({ message: "Internal server error", error: error.message });
        }
}