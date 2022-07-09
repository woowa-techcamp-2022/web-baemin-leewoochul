// 출처: https://html.spec.whatwg.org/multipage/input.html#email-state-(type=email)
export const validateEmail = (value) =>
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
    value
  );

export const validateNickname = (nickname) =>
  nickname.length >= 2 && nickname.length <= 10;

const hasThreeRepeatedNumber = (number) => /([0-9])\1{2,}/.test(number);

function hasSeqentialNumber(value) {
  for (let i = 0; i < value.length - 2; i++) {
    const subString = value.slice(i, i + 3);
    if ('0123456789'.includes(subString) || '9876543210'.includes(subString)) {
      return true;
    }
  }
  return false;
}

export function validatePassword(value) {
  const MAX_LENGTH = 10;
  if (value.length < MAX_LENGTH) return false;

  let caseCounts = 0;
  if (/[A-Z]/.test(value)) caseCounts++;
  if (/[a-z]/.test(value)) caseCounts++;
  if (/[0-9]/.test(value)) caseCounts++;
  if (/[!@#\$%\^\&*\)\(+=._-]/.test(value)) caseCounts++;
  const MIN_CASE_COUNTS = 2;
  if (caseCounts < MIN_CASE_COUNTS) return false;

  if (hasThreeRepeatedNumber(value)) return false;
  if (hasSeqentialNumber(value)) return false;
  return true;
}

function isLeap(year) {
  const y = Number(year);
  return (y % 4 === 0 && y % 100 !== 0) || year % 400 === 0;
}

export function validateBirthDate(value) {
  if (value.length !== 10) return false;

  const [year, month, date] = value.split('.').map((el) => Number(el));
  if (!month || !date) return false;
  if (year >= new Date().getFullYear()) return false;
  if (month < 1 || month > 12) return false;
  if (date < 1) return false;
  if ([1, 3, 5, 7, 8, 10, 12].includes(month) && date > 31) return false;
  if ([4, 6, 9, 11].includes(month) && date > 30) return false;
  if (month === 2) {
    if (isLeap(year) && date > 29) return false;
    if (!isLeap(year) && date > 28) return false;
  }
  return true;
}
