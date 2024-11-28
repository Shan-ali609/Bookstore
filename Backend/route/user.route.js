import express from 'express';
import { signup , login } from '../controler/user.controller.js';
const router = express.Router();

router.post('/singup',signup);
router.post('/login',login);

export default router;