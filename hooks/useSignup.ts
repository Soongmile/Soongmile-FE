import { UserSignupRequest } from '@/types/user.type';
import { useState } from 'react';

const useSignup = () => {
  const [registerForm, setRegisterForm] = useState<UserSignupRequest>({
    email: '',
    membername: '',
    password: '',
    passwordchecker: '',
  });

  const [nicknameError, setNicknameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordConfirmError, setPasswordConfirmError] = useState<string>('');

  const nicknameCheck = /^[가-힣A-Za-z0-9_]{1,10}$/;
  const passwordCheck = /^[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,20}$/;
  const emailCheck = /^[a-zA-Z0-9._%+-]+@soongsil\.ac\.kr$/;

  const isNicknameValid = (nickname: string): boolean => {
    return nicknameCheck.test(nickname);
  };
  const isEmailValid = (inputEmail: string): boolean => {
    return emailCheck.test(inputEmail);
  };
  const isPasswordValid = (inputPassword: string): boolean => {
    return passwordCheck.test(inputPassword);
  };
  const isPasswordConfirmValid = (inputPasswordConfirm: string): boolean => {
    return inputPasswordConfirm === registerForm.password;
  };

  const handleNickname = (value: string) => {
    setRegisterForm({ ...registerForm, membername: value });
    setNicknameError('');

    if (!isNicknameValid(value)) {
      setNicknameError('1~10자 이내, 한글, 영문, 특수기호(_) 사용 가능');
    }
  };

  const handleEmail = (value: string) => {
    setRegisterForm({ ...registerForm, email: value });
    setEmailError('');

    if (!isEmailValid(value)) {
      setEmailError('soongsil.ac.kr 숭실대 이메일 형식으로 작성해주세요.');
    }
  };

  const handlePassword = (value: string) => {
    setRegisterForm({ ...registerForm, password: value });
    setPasswordError('');

    if (!isPasswordValid(value)) {
      setPasswordError('8~20자 이내, 문자, 숫자, 특수기호 사용 가능');
    }
  };

  const handlePasswordConfirm = (value: string) => {
    setRegisterForm({ ...registerForm, passwordchecker: value });
    setPasswordConfirmError('');

    if (!isPasswordConfirmValid(value)) {
      setPasswordConfirmError('비밀번호가 일치하지 않습니다.');
    }
  };

  return {
    registerForm,
    isNicknameValid,
    isEmailValid,
    isPasswordValid,
    isPasswordConfirmValid,
    handleNickname,
    handleEmail,
    handlePassword,
    handlePasswordConfirm,
    nicknameError,
    emailError,
    passwordError,
    passwordConfirmError,
  };
};

export default useSignup;
