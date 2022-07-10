import { Router } from 'express';
const router = Router();

router.get('/', function (req, res, next) {
  res.render('agreement', { title: '배민 회원가입 - 약관 동의' });
});

export default router;
