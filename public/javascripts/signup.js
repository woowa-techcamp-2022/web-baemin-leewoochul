import { signup } from './utils/api.js';
import {
  validateBirthDate,
  validateEmail,
  validatePassword,
} from './utils/validate.js';

const $form = document.querySelector('form');
const $emailLabel = document.querySelector('.email-label');
const $nicknameLabel = document.querySelector('.nickname-label');
const $passwordLabel = document.querySelector('.password-label');
const $birthDateLabel = document.querySelector('.birthDate-label');

$form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { target } = event;
  const email = target.email.value;
  const nickname = target.nickname.value;
  const password = target.password.value;
  const birthDate = target.birthDate.value;

  try {
    await signup(email, nickname, password, birthDate);
    window.location.href = '/login';
  } catch (err) {
    console.log(err);
  }
});

function setError($target, value) {
  if (value === '') {
    $target.classList.remove('has-error');
  } else {
    $target.classList.add('has-error');
  }
  const $error = $target.querySelector('.error');
  $error.innerHTML = value;
}

$emailLabel.addEventListener('input', (event) => {
  setError($emailLabel, '');
  const { value } = event.target;
  if (value === undefined) {
    $emailLabel.classList.remove('filled');
  } else {
    $emailLabel.classList.add('filled');
  }
});

$emailLabel.addEventListener('click', (event) => {
  const $input = $emailLabel.querySelector('input');

  if (event.target.closest('.cancel-button')) {
    $input.value = '';
    $emailLabel.classList.remove('filled');
  }

  const $duplicateCheckButton = event.target.closest('.duplicate-check-button');
  if ($duplicateCheckButton) {
    const $checkIcon = $emailLabel.querySelector('.check-icon');
    if (validateEmail($input.value)) {
      $form.classList.add('email-success');
      $checkIcon.style.display = 'block';
      $duplicateCheckButton.disabled = true;
      $input.disabled = true;
      setError($emailLabel, '');
    } else {
      $checkIcon.style.display = '';
      setError($emailLabel, '유효하지 않은 이메일입니다.');
    }
  }
});

$nicknameLabel.addEventListener('input', (event) => {
  if (event.target.value) {
    $nicknameLabel.classList.add('valid');
  } else {
    $nicknameLabel.classList.remove('valid');
  }
});

$passwordLabel.addEventListener('input', (event) => {
  if (validatePassword(event.target.value)) {
    $passwordLabel.classList.add('valid');
    setError($passwordLabel, '');
  } else {
    $passwordLabel.classList.remove('valid');
    setError(
      $passwordLabel,
      '10자 이상 영어 대문자, 소문자, 숫자, 특수문자 중 2종류를 조합해야 합니다.'
    );
  }
});

$birthDateLabel.addEventListener('input', (event) => {
  if (validateBirthDate(event.target.value)) {
    $birthDateLabel.classList.add('valid');
    setError($birthDateLabel, '');
  } else {
    $birthDateLabel.classList.remove('valid');
    setError($birthDateLabel, '올바른 생년월일을 입력해주세요.');
  }
});
