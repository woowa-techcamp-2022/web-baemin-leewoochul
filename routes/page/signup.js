import { Router } from 'express';
const router = Router();

router.get('/', function (req, res, next) {
  res.render('signup', { title: '배민 회원가입 - 회원가입' });
});

export default router;
