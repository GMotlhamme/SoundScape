import { client } from "../index.js";
import { convertProductPriceData } from "../Utils/converter.js";
import getUserCartController from "./getUserCartController.js";
export default async function storeUserOrderController(req, res) {
    try {
        const user_id = req.user.id;
        const cartQuery = 'SELECT * FROM checkout WHERE user_id = $1';
        const checkoutResult = await client.query(cartQuery, [user_id]);
        if (checkoutResult.rows.length === 0 || !checkoutResult.rows) {
            return res.status(404).json({ message: "No cart items found" })
        }
        const cart = checkoutResult.rows.map(item => item.product_id);
        //retrieving the product id from the database as an array of strings, 
        // we need to split the string if it contains multiple product ids 
        // and convert them to integers before sending the response
        const itemIds = [];
        if (cart[0].includes(",")) {
            const cartItemList = cart.map(item => item.split(',')).flat();
            const cartItemsInt = cartItemList.map(item => parseInt(item));

            itemIds.push(...cartItemsInt);
        } else {
            const cartItemsInt = cart.map(item => parseInt(item));
            itemIds.push(...cartItemsInt);
        }

        //retrieving price
        const getProductsQuery = 'SELECT price FROM products WHERE id = ($1)';
        let totalAmount = 0;
        const pricePromises = itemIds.map(async (productId) => {
            const priceResult = await client.query(getProductsQuery, [productId]);
            if (priceResult.rows.length === 0) return res.status(404).json({ message: "No products found" });
                const price = convertProductPriceData(priceResult.rows[0]);
                return price;
        })
        // calculating total amount due for the order by summing up the prices of all products in the cart
        const prices = await Promise.all(pricePromises);
        totalAmount = prices.reduce((acc, price) => acc + price, 0);
        


        // inserting order into the database 
        const created_at = new Date();
         const checkUserQuery = 'SELECT product_id FROM orders WHERE user_id = $1';
        const existingRow = await client.query(checkUserQuery, [user_id]);

        let productQuery;
            let queryParams;

            if (existingRow.rows.length > 0) {
                  // User has existing wishlist - append product_id to existing string
                  const currentProductIds = existingRow.rows[0].product_id || '';
                  const updatedProductIds = currentProductIds 
                        ? `${currentProductIds},${itemIds.join(',')}` 
                        : itemIds.join(',');
                  
                  productQuery = 'UPDATE orders SET product_id = $1, total_amount = $2, created_at = $3 WHERE user_id = $4';
                  queryParams = [updatedProductIds, totalAmount, created_at, user_id];
            } else {
                  // User doesn't have wishlist - create new row
                  productQuery = 'INSERT INTO orders (user_id, product_id, total_amount, created_at) VALUES ($1, $2, $3, $4) RETURNING *;';
                  const itemIdsString = itemIds.join(',');
                  queryParams = [user_id, itemIdsString, totalAmount, created_at];
            }
        
        const result = await client.query(productQuery, queryParams);
        if (result.rows.length === 0) {
            return res.status(500).json({ message: 'Failed to store order' });
        } else {
            return res.status(201).json({ message: 'Order stored successfully', order: result.rows[0] });
        }


    } catch (error) {
        return res.status(500).json({ message: 'Error storing order', error: error.message });
    }
}