import { client } from "../index.js";

/**
 * Stores a cart item in the checkout table.
 * Requires the product_id and user_id as parameters in the request body.
 * If the product_id or user_id is missing, it returns a 400 status code with an error message.
 * If there is an error storing the cart item, it returns a 500 status code with an error message.
 * If successful, it returns a 200 status code with a success message.
 */
export default async function storeCartItemsController(req, res){
    try {
        const user_id = req.user.id; 
        const { id } = req.body;
        const product_id = id;
        const created_at = new Date();
        if (!id  || !user_id) {
            return res.status(400).json({ message: "Missing required fields or not logged in" });
        }

        const checkUserQuery = 'SELECT product_id FROM checkout WHERE user_id = $1';
        const existingRow = await client.query(checkUserQuery, [user_id]);

        let productQuery;
            let queryParams;

            if (existingRow.rows.length > 0) {
                  // User has existing wishlist - append product_id to existing string
                  const currentProductIds = existingRow.rows[0].product_id || '';
                  const updatedProductIds = currentProductIds 
                        ? `${currentProductIds},${product_id}` 
                        : product_id;
                  
                  productQuery = 'UPDATE checkout SET product_id = $1 WHERE user_id = $2';
                  queryParams = [updatedProductIds, user_id];
            } else {
                  // User doesn't have wishlist - create new row
                  productQuery = 'INSERT INTO checkout (user_id, product_id, created_at) VALUES ($1, $2, $3)';
                  queryParams = [user_id, product_id, created_at];
            }


        await client.query(productQuery, queryParams);
        return res.status(200).json({ message: "Cart items stored successfully" });
    } catch (error) {
        console.error("Error storing cart items:", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
}