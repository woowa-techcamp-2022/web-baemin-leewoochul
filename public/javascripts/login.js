import { login } from './api.js';

const $form = document.querySelector('.login-form');
$form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { target } = event;
  const id = target.id.value;
  const password = target.password.value;

  try {
    await login(id, password);
    window.location.href = '/';
  } catch (err) {
    console.log(err);
    // 에러 메시지
  }
});
