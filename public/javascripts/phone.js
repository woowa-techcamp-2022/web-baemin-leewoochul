import addErrorToggleEvent from './utils/addErrorToggleEvent.js';
import isValid from './utils/isValid.js';
import pipe from './utils/pipe.js';
import { preventNonNumericInput } from './utils/regex.js';
import { validatePhone } from './utils/validate.js';

const $form = document.querySelector('form');
const $phoneLabel = document.querySelector('.phone-label');
const $getAuthNumberButton = document.querySelector('.get-auth-number');

$form.addEventListener('input', () => {
  if (isValid($phoneLabel)) {
    $getAuthNumberButton.disabled = false;
  }
});

function addSlashToPhone(phone) {
  let replacedPhone = phone;
  if (phone.slice(0, 3) === '010') {
    // e.g.) 010-1234-5678
    replacedPhone = replacedPhone
      .slice(0, 11)
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3');
  } else {
    // e.g.) 016-123-4567
    replacedPhone = replacedPhone
      .slice(0, 10)
      .replace(/^(\d{0,3})(\d{0,3})(\d{0,4})$/g, '$1-$2-$3');
  }
  return replacedPhone.replace(/\-{1,2}$/g, '');
}

$phoneLabel.addEventListener('input', (event) => {
  const { target } = event;
  target.value = pipe(preventNonNumericInput, addSlashToPhone)(target.value);
});

$getAuthNumberButton.addEventListener('click', () => {});

addErrorToggleEvent(
  $phoneLabel,
  '올바른 휴대폰 번호를 입력해주세요.',
  validatePhone
);
