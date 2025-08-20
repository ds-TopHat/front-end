import { useState } from 'react';
import Input from '@components/input/Input';

import * as styles from './signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(e.target.value);
    if (confirmPasswordError) {
      setConfirmPasswordError('');
    }
  };

  const handleEmailBlur = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('이메일을 입력해주세요.');
    } else if (!emailRegex.test(email)) {
      setEmailError('정확한 이메일을 입력해주세요.');
    }
  };

  const handlePasswordBlur = () => {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
    } else if (!passwordRegex.test(password)) {
      setPasswordError('비밀번호는 숫자, 특수문자 포함 8자 이상이어야 합니다.');
    }
  };

  const handleConfirmPasswordBlur = () => {
    if (!confirmPassword) {
      setConfirmPasswordError('비밀번호 확인을 입력해주세요.');
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('동일한 비밀번호를 입력해 주세요.');
    }
  };

  return (
    <div className={styles.container}>
      {/* 상단 박스 */}
      <div className={styles.topBox} />

      {/* 회원가입 폼 */}
      <div className={styles.formWrapper}>
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          error={emailError}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          error={passwordError}
        />
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          onBlur={handleConfirmPasswordBlur}
          error={confirmPasswordError}
        />
      </div>
    </div>
  );
};

export default Signup;
