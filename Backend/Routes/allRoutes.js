import express from 'express';
import firstController from '../Controllers/firstController.js';


export const router = express.Router();

router.get('/', firstController);