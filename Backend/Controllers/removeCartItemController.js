import { client } from "../index.js";
/**
 * Clears the cart for the user with the given user_id.
 * If the user_id is not provided, it returns a 401 status code with a message saying "Unauthorized procedure".
 * If there is an error clearing the cart, it returns a 500 status code with a message saying "Internal server error" and the error message.
 * Otherwise, it returns a 200 status code with a message saying "Cart cleared".
 */
export default async function removeCartItemController(req, res){
    try {
        const user_id = req.user && req.user.id
        if (!user_id) return res.status(401).json({message: "Unauthorized procedure"})

            const deleteCartQuery = 'DELETE * FROM checkout WHERE user_id = $1'
            await client.query(deleteCartQuery, [user_id])
            res.json({message:"Cart cleared"})
    } catch (error) {
        console.error(error)
        return res.status(500).json({"Internal server error": error})
    }
}