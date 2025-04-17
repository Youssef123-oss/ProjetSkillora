import express from 'express';
import { registerUser } from './user.controller.js';

const router = express.Router();

// POST /api/users/register
router.post('/register', registerUser);

export default router;
