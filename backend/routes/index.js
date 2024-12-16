import express from 'express';
import dotenv from "dotenv"
import { getUsers } from '../controllers/users.js';
import { Register } from '../controllers/users.js';
import { Login } from '../controllers/users.js';
dotenv.config()

const router = express.Router();

router.get('/users', getUsers);
router.post('/users/register', Register);
router.post("/users/login", Login)

export default router;