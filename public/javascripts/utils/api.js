import fetchData from './fetchData.js';

export async function login(id, password) {
  const result = await fetchData('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, password }),
  });
  return result;
}

export async function signup(email, nickname, password, birthDate) {
  const result = await fetchData('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, nickname, password, birthDate }),
  });
  return result;
}
