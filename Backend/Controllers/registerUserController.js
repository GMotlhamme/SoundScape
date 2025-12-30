import { client } from "../index.js";
import bcrypt from 'bcrypt';
/**
 * Registers a new user with the provided username, email and password.
 * If the user already exists, returns a 400 status code with a message saying "User already exists".
 * If there is an error, returns a 500 status code with the error message.
 * If successful, returns a 200 status code with a message saying "User registered successfully"
 */
export default async function registerUserController(req, res) {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const userExists = await client.query("SELECT * FROM users WHERE email = $1", [email]);//check if user already exists

        if (userExists.rows.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(`${password}`, 10);//hash password with bcrypt
        const registerUserQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
        await client.query(registerUserQuery, [username, email, hashedPassword]);
        res.json({ message: "User registered successfully" })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

