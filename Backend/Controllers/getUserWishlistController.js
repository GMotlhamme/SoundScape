import { client } from "../index.js";
/**
 * Retrieves the wishlist items for a given user.
 * Returns a JSON object with a message and the wishlist items.
 * If there is an error, returns a 500 status code with the error message.
 */
export default async function getUserWishlistController(req,res){
    try {
        const user_id = req.user && req.user.id
        const getWishlistQuery = 'SELECT * FROM wishlist WHERE user_id = $1'
        const result = await client.query(getWishlistQuery, [user_id])
        if(result.rows.length === 0 || !result.rows){
            return res.status(200).json({message: "No wishlist items found"})
        }
        return res.status(200).json({message: result.rows})
    } catch (error) {
        return res.status(500).json({"Internal Server Error": error})
    }
}

 