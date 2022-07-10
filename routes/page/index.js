import { Router } from 'express';
import homeRouter from './home.js';
import loginRouter from './login.js';
import signupRouter from './signup.js';
const router = Router();

router.use('/', homeRouter);
router.use('/login', loginRouter);
router.use('/signup', signupRouter);

export default router;
