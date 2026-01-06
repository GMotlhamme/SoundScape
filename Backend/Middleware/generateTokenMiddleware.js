import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export default async function generateTokenMiddleware(user) {
    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '15m' })
}