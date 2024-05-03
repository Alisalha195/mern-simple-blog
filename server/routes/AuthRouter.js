import express from 'express';
import { signup , login } from '../controllers/AuthController.js';

const router = express.Router();

 router.post("/signup", signup);
router.post("/login", login);
// router.post('/google', google);
// router.get('/signout', signOut)

export default router;