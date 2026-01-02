import generateTokenMiddleware from "../Middleware/generateTokenMiddleware.js";
import refreshTokenMiddleware from "../Middleware/refreshTokenMiddleware.js";
import { client } from "../index.js";
import bcrypt from 'bcrypt';
/**
 * Logs a user in and generates a JSON Web Token that can be used to authenticate protected routes.
 * The function takes an email and password in the request body and returns a JSON object with a message and a user token.
 * If the email or password is invalid, the function returns a 401 status code with an error message.
 * If the email and password are valid, the function returns a 200 status code with a success message and a user token.
 * The user token is a JSON Web Token that is generated using the generateTokenMiddleware function.
 * The user token is returned in the response body as a JSON object with the key "userToken".
 */
export default async function loginUserController(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const loginUserQuery = 'SELECT * FROM users WHERE email = $1';
    const user = await client.query(loginUserQuery, [email]);
    const userDatabasePassword = user.rows[0].password;

    const rightUserPassword = await bcrypt.compare(password.toString(), userDatabasePassword);

    if (user.rows.length === 0 || !rightUserPassword) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const accessToken = await generateTokenMiddleware(user.rows[0])
    const refreshToken = refreshTokenMiddleware(user.rows[0])


    //make cookie so the refresh token can be stored in the cookie
    res.cookie("refreshToken", refreshToken, { 
        httpOnly: true, 
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
     });
    res.json({ message: "User logged in successfully", userToken: accessToken });
}