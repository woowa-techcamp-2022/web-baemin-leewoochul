import { Router } from 'express';
import getRandomInt from '../../utils/getRandomInt.js';
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

let authNumber;

router.get('/', async (req, res, next) => {
  authNumber = getRandomFourNumber();
  await delay(2000);
  res.send(authNumber);
});

router.get('/check', async (req, res, next) => {
  res.send(authNumber === req.query.authNumber);
});

export default router;
