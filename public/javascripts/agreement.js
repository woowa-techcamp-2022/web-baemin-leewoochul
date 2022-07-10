const form = document.querySelector('form');
const allAgreeCheckbox = document.querySelector('.check-label.all-agree input');
const checkboxContainer = document.querySelector('.checkbox-container');
const allCheckboxes = [
  ...checkboxContainer.querySelectorAll('.check-label input'),
];
const necessaryChekboxes = [
  ...document.querySelectorAll('.check-label.necessary input'),
];
const radioButtons = [...document.querySelectorAll('.radio-label input')];
const submitButton = document.querySelector('.submit-button');

const hasAllCheckboxChecked = () =>
  allCheckboxes.filter((checkbox) => checkbox.checked === false).length === 0;

function check(checkbox) {
  checkbox.checked = true;
}

function uncheck(checkbox) {
  checkbox.checked = false;
}

function checkAll() {
  allCheckboxes.forEach(check);
}

function uncheckAll() {
  allCheckboxes.forEach(uncheck);
}

allAgreeCheckbox.addEventListener('click', () => {
  if (hasAllCheckboxChecked()) uncheckAll();
  else checkAll();
});

const hasAllNecessaryCheckboxChecked = () =>
  necessaryChekboxes.filter((checkbox) => checkbox.checked === false).length ===
  0;

const hasAllAgreeChekboxChecked = () => allAgreeCheckbox.checked;

allCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', (event) => {
    if (hasAllCheckboxChecked() && !hasAllAgreeChekboxChecked()) {
      check(allAgreeCheckbox);
    } else if (!hasAllCheckboxChecked() && hasAllAgreeChekboxChecked()) {
      uncheck(allAgreeCheckbox);
    }
  });
});

const hasRadioButtonChecked = () =>
  radioButtons.filter((button) => button.checked).length > 0;

function toggleSubmitButton() {
  if (hasAllNecessaryCheckboxChecked() && hasRadioButtonChecked()) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

document.body.addEventListener('click', (event) => {
  if (event.target.closest('input')) {
    toggleSubmitButton();
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  window.location.href = '/phone';
});
