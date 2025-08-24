import { emailRegex, passwordRegex } from '@utils/validators';

export const validateSignup = (
  email: string,
  password: string,
  confirmPassword: string,
) => {
  let emailError = '';
  let passwordError = '';
  let confirmPasswordError = '';

  if (!email) {
    emailError = '이메일을 입력해주세요.';
  } else if (!emailRegex.test(email)) {
    emailError = '정확한 이메일을 입력해주세요.';
  }

  if (!password) {
    passwordError = '비밀번호를 입력해주세요.';
  } else if (!passwordRegex.test(password)) {
    passwordError = '숫자·특수문자 포함 8자 이상이어야 합니다.';
  }

  if (!confirmPassword) {
    confirmPasswordError = '비밀번호 확인을 입력해주세요.';
  } else if (confirmPassword !== password) {
    confirmPasswordError = '동일한 비밀번호를 입력해 주세요.';
  }

  return { emailError, passwordError, confirmPasswordError };
};
