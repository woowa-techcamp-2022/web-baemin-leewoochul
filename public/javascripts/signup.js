import addErrorToggleEvent from './utils/addErrorToggleEvent.js';
import { signup } from './utils/api.js';
import pipe from './utils/pipe.js';
import { preventNonNumericInput } from './utils/regex.js';
import {
  validateBirthDate,
  validateEmail,
  validateNickname,
  validatePassword,
} from './utils/validate.js';
import isValid from './utils/isValid.js';
import setError from './utils/setError.js';

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

$form.addEventListener('input', () => {
  if (
    isValid($nicknameLabel) &&
    isValid($passwordLabel) &&
    isValid($birthDateLabel)
  ) {
    const $submitButton = $form.querySelector('.submit-button');
    $submitButton.disabled = false;
  }
});

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
      setError($emailLabel, '???????????? ?????? ??????????????????.');
    }
  }
});

const limitBirthDateLength = (birthDate) => birthDate.slice(0, 8);
const addDotToBirthDate = (birthDate) =>
  birthDate
    .replace(/^(\d{0,4})(\d{0,2})(\d{0,2})$/g, '$1.$2.$3')
    .replace(/\.{1,2}$/g, '');

$birthDateLabel.addEventListener('input', (event) => {
  const { target } = event;
  target.value = pipe(
    preventNonNumericInput,
    limitBirthDateLength,
    addDotToBirthDate
  )(target.value);
});

addErrorToggleEvent(
  $nicknameLabel,
  '???????????? 2~10?????? ??????????????????.',
  validateNickname
);
addErrorToggleEvent(
  $passwordLabel,
  '10??? ?????? ?????? ?????????, ?????????, ??????, ???????????? ??? 2????????? ???????????? ?????????.',
  validatePassword
);
addErrorToggleEvent(
  $birthDateLabel,
  '????????? ??????????????? ??????????????????.',
  validateBirthDate
);
