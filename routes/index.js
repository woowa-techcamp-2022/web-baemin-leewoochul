import { Router } from 'express';
import db from '../utils/db.js';
const router = Router();

router.get('/', function (req, res, next) {
  const { session } = req.cookies;
  const { sessions, users } = db.data;
  const userSession = sessions.find(({ sessionId }) => sessionId == session);
  const user = users.find((user) => user.id === userSession?.userId);
  res.render('index', { title: '배민 회원가입', user });
});

export default router;
