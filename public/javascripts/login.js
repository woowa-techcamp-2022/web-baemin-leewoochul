import { login } from './utils/api.js';

const $form = document.querySelector('.login-form');

function setError(name, message) {
  const $error = $form.querySelector(`.error.${name}`);
  $error.classList.add('visible');
  $error.innerHTML = message;
}

function removeAllErrors() {
  $form.querySelectorAll('.error').forEach((error) => {
    error.classList.remove('visible');
  });
}

function focusToInput(name) {
  const input = $form.querySelector(`.form-input[name="${name}"]`);
  input.focus();
}

$form.addEventListener('input', removeAllErrors);

$form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { target } = event;
  const nicknameOrEmail = target.nicknameOrEmail.value;
  const password = target.password.value;

  if (!nicknameOrEmail) {
    setError('email', '아이디를 입력해주세요.');
    focusToInput('nicknameOrEmail');
    return;
  }

  if (!password) {
    setError('password', '비밀번호를 입력해주세요.');
    focusToInput('password');
    return;
  }

  try {
    await login(nicknameOrEmail, password);
    window.location.href = '/';
  } catch (err) {
    setError('all', '아이디 또는 비밀번호가 유효하지 않습니다.');
  }
});
