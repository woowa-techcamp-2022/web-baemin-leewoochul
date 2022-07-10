import { Router } from 'express';
const router = Router();

router.get('/', function (req, res, next) {
  res.render('login', { title: '배민 회원가입 - 로그인' });
});

export default router;
