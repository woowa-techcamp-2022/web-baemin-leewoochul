import { Router } from 'express';
import loginRouter from './login.js';
import signupRouter from './signup.js';
import authRouter from './auth.js';
const router = Router();

router.use('/login', loginRouter);
router.use('/signup', signupRouter);
router.use('/auth', authRouter);

export default router;
