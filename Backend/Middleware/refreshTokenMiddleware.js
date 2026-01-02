import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
/**
 * Generates a refresh token for the given user
 */
export default function refreshTokenMiddleware(user) {
    jwt.sign(user, process.env.JWT_REFRESH_SECRET)
}