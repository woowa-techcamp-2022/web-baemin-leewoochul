import { Router } from 'express';
import { db } from '../../app.js';
const router = Router();

router.post('/', async (req, res, next) => {
  const { id, password } = req.body;
  // FIXME: 임시 로그인
  const { users } = db.data;

  const user = users.filter(
    (user) =>
      (user.email === id || user.username === id) && user.password === password
  )[0];

  if (user) {
    res.status(200);
    const session = Math.random();

    const { sessions } = db.data;
    sessions.push({ session, userId: user.id });
    await db.write();

    res.cookie('session', session, {
      expires: new Date(Date.now() + 1000000),
    });
    res.send('로그인 성공');
  } else {
    res.status(401);
    res.send('not authorized');
    // res.send({ message: '아이디 또는 비밀번호가 잘못되었습니다.' });
    // fail;
  }
});

export default router;
