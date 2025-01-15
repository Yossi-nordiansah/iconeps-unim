import express from 'express';
import dotenv from "dotenv";
import { getUsers } from '../controllers/users.js';
import { Register } from '../controllers/users.js';
import { Login } from '../controllers/users.js';
import { verifyToken } from '../middleware/VerifyToken.js';
import { refreshToken } from '../controllers/refershToken.js';
import { Logout } from '../controllers/users.js';
import { sendEmail } from '../controllers/sendEmail.js';
import { readXlsx } from '../controllers/readXlsx.js';
dotenv.config()

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users/register', Register);
router.post("/users/login", Login);
router.get("/users/token", refreshToken);
router.delete("/users/Logout", Logout);
router.post("/send-email", sendEmail);
router.post("/save-student-scores", readXlsx);

export default router;