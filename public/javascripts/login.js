import { login } from './utils/api.js';

const $form = document.querySelector('.login-form');

$form.addEventListener('input', (event) => {
  $form.classList.remove('has-error');
});

$form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { target } = event;
  const nicknameOrEmail = target.nicknameOrEmail.value;
  const password = target.password.value;

  try {
    await login(nicknameOrEmail, password);
    window.location.href = '/';
  } catch (err) {
    $form.classList.add('has-error');
  }
});
