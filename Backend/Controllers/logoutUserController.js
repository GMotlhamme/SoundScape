/**
 * Logs a user out by clearing the refresh token cookie.
 * Returns a 200 status code with a message saying "User logged out successfully".
 * If there is an error, returns a 500 status code with the error message.
 */
export default function logoutUserController(req, res){
    res.cookie('refreshToken', '', { httpOnly: true, expires: new Date(0) });
    return res.status(200).json({ message: 'User logged out successfully' });
}