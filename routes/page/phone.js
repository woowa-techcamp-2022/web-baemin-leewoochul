import { Router } from 'express';
const router = Router();

router.get('/', function (req, res, next) {
  res.render('phone', { title: '배민 회원가입 - 휴대전화' });
});

export default router;
