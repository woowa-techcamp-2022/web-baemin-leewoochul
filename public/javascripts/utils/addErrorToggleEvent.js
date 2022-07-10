import setError from './setError.js';

function addErrorToggleEvent($target, errorMessage, validator) {
  $target.addEventListener('input', (event) => {
    if (validator(event.target.value)) {
      $target.classList.add('valid');
      setError($target, '');
    } else {
      $target.classList.remove('valid');
      setError($target, errorMessage);
    }
  });
}

export default addErrorToggleEvent;
