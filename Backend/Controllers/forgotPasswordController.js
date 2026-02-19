import sendEmail, { mailTemplate } from "../Utils/email.js";
import { db } from "../Utils/userRecovery.js";
import crypto from "crypto";
import dotenv from 'dotenv';
dotenv.config()

export default async function forgotPasswordController(req, res) {
    try {
    const email = req.body.email;
    const user = await db.get_user_by_email(email);
    if (!user || user.rows.length === 0) {
      res.json({
        success: false,
        message: "Your are not registered!",
      });
    } else {
      const token = crypto.randomBytes(20).toString("hex");
      const resetToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");
      await db.update_forgot_password_token(user.rows[0].id, resetToken);

      const mailOption = {
        email: email,
        subject: "Forgot Password Link",
        message: mailTemplate(
          "We have received a request to reset your password. Please reset your password using the link below.",
          `${process.env.FRONTEND_URL}/resetPassword?id=${user.rows[0].id}&token=${resetToken}`,
          "Reset Password"
        ),
      };
      await sendEmail(mailOption);
      res.json({
        success: true,
        message: "A password reset link has been sent to your email.",
      });
    }
  } catch (err) {
    console.log(err);
  }
}