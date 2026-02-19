import { client } from "../index.js";
export let db = {};

db.get_user_by_email = async (email) => {
    const query = 'SELECT email, id from users WHERE email = $1';
    const result = await client.query(query, [email]);
    if (!result.rows.length) {
        throw new Error("User not found");
    } else {
        return result;
    }
};

db.update_forgot_password_token = async (id, token) => {
    const createdAt = new Date().toISOString();
    const expiresAt = new Date(Date.now() + 60 * 60 * 24 * 1000).toISOString();
    const query = 'INSERT INTO reset_tokens(token, created_at, expires_at, user_id) VALUES($1, $2, $3, $4)';
    const result = await client.query(query, [token, createdAt, expiresAt, id]);
    if (!result || result.rowCount === 0) {
         throw new Error("Failed to store password reset token");
    } else {
        return result;
    }
};

db.get_password_reset_token = async (id) => {
    const query = 'SELECT token, expires_at from reset_tokens WHERE user_id = $1 ORDER BY created_at DESC LIMIT 1';
    const result = await client.query(query, [id]);
    if (!result || result.rowCount === 0) {
        throw new Error("Failed to retrieve password reset token");
    } else {
        return result.rows[0];
    }
};

db.update_password_reset_token = async (id) => {
    const query = 'DELETE FROM reset_tokens WHERE user_id = $1';
    const result = await client.query(query, [id]);
    return result;
};

db.update_user_password = async (id, password) => {
    const query = 'UPDATE users SET password = $1 WHERE id = $2';
    const result = await client.query(query, [password, id]);

    if (!result || !result.rows.length) {
         throw new Error("Failed to update user password");
    } else {
        return result;
    }

};

