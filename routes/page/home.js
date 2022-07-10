import { Router } from 'express';
import db from '../../utils/db.js';
const router = Router();

function getUserBySession(req) {
  const { session } = req.cookies;
  const { sessions, users } = db.data;
  const userSession = sessions.find(({ sessionId }) => sessionId == session);
  const user = users.find((user) => user.id === userSession?.userId);
  return user;
}

router.get('/', function (req, res, next) {
  const user = getUserBySession(req);
  res.render('home', { title: '배민 회원가입', user });
});

export default router;
