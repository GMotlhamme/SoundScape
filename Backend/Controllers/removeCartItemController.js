import { client } from "../index.js";
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