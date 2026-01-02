import jwt from 'jsonwebtoken'
/**
 * Middleware function to authenticate a user's token.
 * It checks if the token is present in the Authorization header, and if it is valid.
 * If the token is invalid, it returns a 403 status code with an error message.
 * If the token is valid, it attaches the user information to the request object and calls the next function.
 */

export default async function authenticateTokenMiddleware(req, res, next) {
    const authHeader = req.headers['authorization']
    const userToken = authHeader && authHeader.split(' ')[1] // Bearer TOKEN

    if (!userToken) {
        return res.status(401).json({ message: "No token provided" })
    }

    jwt.verify(userToken, process.env.JWT_SECRET, (err, user) => {
        // checking if the token is still valid 
        if (err) {
            return res.status(403).json({ message: "Invalid token" })
        }
        req.user = user // attach the user info to the request object so the controller knows who is making the request
        next();
    })
}