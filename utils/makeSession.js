import getRandomInt from './getRandomInt.js';

function makeSession() {
  let session = '';
  for (let i = 0; i < 20; i++) {
    session += String.fromCharCode(getRandomInt(33, 126));
  }
  return session;
}

export default makeSession;
