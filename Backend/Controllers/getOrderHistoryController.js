import { client } from "../index.js";
/**
 * Retrieves the order history for a given user.
 * Requires the user_id as a parameter in the request body.
 * If there is an error fetching the order history, it returns a 500 status code with an error message.
 * If successful, it returns a 200 status code with a success message and the order history.
 */
export default async function getOrderHistoryController(req, res){
    try {
        const user_id = req.user.id;
        const getOrdersQuery = 'SELECT * FROM orders WHERE user_id = $1 ORDER BY created_at DESC';
        const orders = await client.query(getOrdersQuery, [user_id]);
        return res.status(200).json({ message: 'Order history fetched successfully', orders: orders.rows });
    } catch (error) {
       return res.status(500).json({ message: 'Error fetching order history', error: error.message }); 
    }
}