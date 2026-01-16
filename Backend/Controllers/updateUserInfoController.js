import { client } from "../index.js";
/**
 * Updates a user's information with the provided name, email and address.
 * Requires the user to be logged in and provide the necessary fields in the request body.
 * If the user is not logged in, it returns a 401 status code with an error message.
 * If any of the required fields are missing, it returns a 400 status code with an error message.
 * If the user is not found, it returns a 404 status code with an error message.
 * If there is an error updating the user information, it returns a 500 status code with the error message.
 * If successful, it returns a 200 status code with a success message and the updated user information.
 */
export default async function updateUserInfoController(req, res){
   try {
         const user_id = req.user && req.user.id;
            if (!user_id) return res.status(401).json({ message: 'Unauthorized procedure' });
        const { name, email, address } = req.body;
        const updateUserQuery = 'UPDATE users SET name = $1, email = $2, address = $3 WHERE id = $4 RETURNING *';
        const values = [name, email, address, user_id];
        const updatedUser = await client.query(updateUserQuery, values);
        if(updatedUser.rows.length === 0 )return res.status(404).json({ message: 'User not found' });
        return res.status(200).json({ message: 'User information updated successfully', user: updatedUser.rows[0] });
   } catch (error) {
        return res.status(500).json({ message: 'Error updating user information', error: error.message });
   }
}