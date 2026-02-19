import { db } from "../Utils/userRecovery.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config()

export default async function resetPasswordController(req, res) {
    try {
        const NumSaltRounds = Number(process.env.NO_OF_SALT_ROUNDS);
        const { password, token, userId } = req.body;
        const userToken = await db.get_password_reset_token(userId);
        if (!res || res.length === 0) {
            res.json({
                success: false,
                message: "Some problem occurred!",
            });
        } else {
            const currDateTime = new Date();
            const expiresAt = new Date(userToken[0].expires_at);
            if (currDateTime > expiresAt) {
                res.json({
                    success: false,
                    message: "Reset Password link has expired!",
                });
            } else if (userToken[0].token !== token) {
                res.json({
                    success: false,
                    message: "Reset Password link is invalid!",
                });
            } else {
                await db.update_password_reset_token(userId);
                const salt = await bcrypt.genSalt(NumSaltRounds);
                const hashedPassword = await bcrypt.hash(password, salt);
                await db.update_user_password(userId, hashedPassword);
                res.json({
                    success: true,
                    message: "Your password reset was successfully!",
                });
            }
        }
    } catch (err) {
        console.log(err);
    }
}