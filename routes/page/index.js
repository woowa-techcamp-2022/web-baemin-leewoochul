import { Router } from 'express';
import homeRouter from './home.js';
import loginRouter from './login.js';
import agreementRouter from './agreement.js';
import phoneRouter from './phone.js';
import signupRouter from './signup.js';
const router = Router();

router.use('/', homeRouter);
router.use('/login', loginRouter);
router.use('/agreement', agreementRouter);
router.use('/phone', phoneRouter);
router.use('/signup', signupRouter);

export default router;
