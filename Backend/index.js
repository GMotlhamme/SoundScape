import express from 'express';
import cors from 'cors';
import { router } from './Routes/allRoutes.js';
import dotenv from 'dotenv';
import { Client } from 'pg';
dotenv.config()

const app = express();
const PORT = process.env.PORT; 
export const client = new Client({
connectionString: process.env.DATABASE_URL,});
//require('crypto').randomBytes(64).toString('hex')
client.connect()
.then(() => console.log("Connected to the database"))
.catch((err) => console.log(err.message));


app.use(cors({origin:"http://localhost:5173/"}));
app.use(express.json());
app.use('/api', router);


app.listen(PORT, () => console.log(`Server running`));