import fetchData from './fetchData.js';

export async function login(nicknameOrEmail, password) {
  const result = await fetchData('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nicknameOrEmail, password }),
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

export async function getAuthNumber() {
  const response = await fetchData('/api/auth', {
    method: 'GET',
  });
  const result = await response.json();
  return result;
}

export async function checkAuthNumber(value) {
  const response = await fetchData(`/api/auth/check?authNumber=${value}`, {
    method: 'GET',
  });
  const result = await response.json();
  return result;
}
