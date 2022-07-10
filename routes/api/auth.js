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

router.get('/', async (req, res, next) => {
  const num = getRandomFourNumber();
  await delay(2000);
  res.send(num);
});

export default router;
