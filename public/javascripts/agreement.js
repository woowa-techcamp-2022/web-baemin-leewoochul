const allAgreeCheckbox = document.querySelector('.check-label.all-agree input');
const checkboxContainer = document.querySelector('.checkbox-container');
const allCheckboxes = [
  ...checkboxContainer.querySelectorAll('.check-label input'),
];
const necessaryChekboxes = [
  ...document.querySelectorAll('.check-label.necessary input'),
];

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

const hasAllNecessaryCheckboxChecked = () => {
  necessaryChekboxes.filter((checkbox) => checkbox.checked === false).length ===
    0;
};

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
