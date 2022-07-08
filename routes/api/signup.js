import { Router } from 'express';
import { db } from '../../app.js';
const router = Router();

router.post('/', async (req, res, next) => {
  const { users } = db.data;
  const user = req.body;

  const lastId = users.length === 0 ? 0 : users[users.length - 1].id;
  db.data.users.push({ id: lastId + 1, ...user, phoneNumber: '' });
  await db.write();
  res.send('회원가입 성공');
});

export default router;
