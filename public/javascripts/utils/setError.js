function setError($target, value) {
  if (value === '') {
    $target.classList.remove('has-error');
  } else {
    $target.classList.add('has-error');
  }
  const $error = $target.querySelector('.error');
  $error.innerHTML = value;
}

export default setError;
