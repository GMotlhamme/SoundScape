import jsonWebToken from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export default async function generateTokenMiddleware(req, res, next){
    try{

    }catch(error){
        return res.status(500).json({message: error.message})
    }
}