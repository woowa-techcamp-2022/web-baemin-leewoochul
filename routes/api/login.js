import { Router } from 'express';
import { db } from '../../app.js';
const router = Router();

router.post('/', async (req, res, next) => {
  const { nicknameOrEmail, password } = req.body;
  const { users } = db.data;

  const user = users.find(
    (user) =>
      (user.email === nicknameOrEmail || user.username === nicknameOrEmail) &&
      user.password === password
  );

  if (user) {
    const sessionId = Math.random();

    const { sessions } = db.data;
    sessions.push({ sessionId, userId: user.id });
    await db.write();

    res.status(200);
    res.cookie('session', sessionId, { maxAge: 1000 * 60 * 60 * 24 }); // 1일
    res.send('로그인 성공');
  } else {
    res.status(401);
    res.send('not authorized');
  }
});

export default router;
