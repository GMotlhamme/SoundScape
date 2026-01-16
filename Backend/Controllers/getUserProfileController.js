import { client } from "../index.js";
/**
 * Retrieves the profile of the user with the given user_id.
 * Requires the user_id as a parameter in the request body.
 * If the user_id is missing, it returns a 401 status code with a message saying "Unauthorized procedure".
 * If the user is not found, it returns a 404 status code with a message saying "User not found".
 * If there is an error fetching the user profile, it returns a 500 status code with an error message.
 * If successful, it returns a 200 status code with a success message and the user profile data.
 */
export default async function getUserProfileController(req, res){
    try {
        const user_id = req.user && req.user.id;
        if (!user_id) return res.status(401).json({ message: 'Unauthorized procedure' });
        const getUserQuery = ' SELECT * FROM users WHERE id = $1';
        const signedUser = await client.query(getUserQuery, [user_id]);
        if (signedUser.rows.length === 0) return res.status(404).json({ message: 'User not found' });
        const user = signedUser.rows[0];
        delete user.password;
        return res.status(200).json({ message: 'User profile fetched successfully', user });
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching user profile', error: error.message });
    }
}