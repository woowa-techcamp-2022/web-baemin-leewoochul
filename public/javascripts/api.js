import fetchData from './utils/fetchData.js';

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
