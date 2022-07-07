// 출처: https://html.spec.whatwg.org/multipage/input.html#email-state-(type=email)
export function validateEmail(value) {
  return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    value
  );
}

export function validateNickname(nickname) {
  // FIXME
  return nickname ? true : false;
}

export function validatePassword(value) {
  if (value.length < 10) return false;

  let caseCounts = 0;
  if (/[A-Z]/.test(value)) caseCounts++;
  if (/[a-z]/.test(value)) caseCounts++;
  if (/[0-9]/.test(value)) caseCounts++;
  if (/[!@#\$%\^\&*\)\(+=._-]/.test(value)) caseCounts++;
  if (caseCounts < 2) return false;

  return true;
}

export function validateBirthDate(value) {
  // FIXME
  return true;
}
