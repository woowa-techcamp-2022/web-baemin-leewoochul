import setError from './setError.js';

function addErrorToggleEvent($target, errorMessage, validator, callback) {
  $target.addEventListener('input', async (event) => {
    if (await validator(event.target.value)) {
      $target.classList.add('valid');
      setError($target, '');
    } else {
      $target.classList.remove('valid');
      setError($target, errorMessage);
    }

    if (callback) callback();
  });
}

export default addErrorToggleEvent;
