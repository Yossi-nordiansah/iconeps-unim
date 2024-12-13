import express from 'express';
import { getUsers } from '../controllers/users.js';
import { Register } from '../controllers/users.js';

const router = express.Router();

router.get('/users', getUsers);
router.post('/users/register', Register);

export default router;