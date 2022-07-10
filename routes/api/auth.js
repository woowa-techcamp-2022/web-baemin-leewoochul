import { Router } from 'express';
import getRandomInt from '../../utils/getRandomInt.js';
import db from '../../utils/db.js';
const router = Router();

const getRandomFourNumber = () =>
  Array(4)
    .fill('')
    .map(() => getRandomInt(0, 9))
    .join('');

const delay = (timeout) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, timeout);
  });

router.get('/', async (req, res, next) => {
  const authNumber = getRandomFourNumber();
  db.data.authNumber = authNumber;
  await db.write();
  await delay(2000);
  res.send(authNumber);
});

router.get('/check', async (req, res, next) => {
  const { authNumber } = db.data;
  res.send(authNumber === req.query.authNumber);
});

export default router;
