import Spacing from '@/components/reusable/Spacing';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import useSignup from '@/hooks/useSignup';
import usePostSignup from '@/hooks/usePostSignup';
import client from '@/apis/client';
import theme from '../styles/theme';
import TextInput from '../components/reusable/Inputs/TextInput';
import CheckedBtn from '../components/reusable/Buttons/CheckedBtn';
import SquareBtn from '../components/reusable/Buttons/SquareBtn';
import Ok from '../assets/icons/CheckCircle.svg';

interface AgreeType {
  personalInfo: boolean;
  adInfo: boolean;
}

interface FontProps {
  size?: 'M' | 'L';
  color?: 'primary' | 'gray';
}

const Signup: NextPage = () => {
  const {
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
  } = useSignup();
  const [{ personalInfo, adInfo }, setAgree] = useState<AgreeType>({
    personalInfo: false,
    adInfo: false,
  });

  const [isCode, setIsCode] = useState<string>('');
  const [isSuccessCode, setIsSuccessCode] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const { mutate: postSignupForm } = usePostSignup();

  const handleCertificate = () => {
    client.post(`/user/join/emailConfirm?code=${isCode}`).then((res) => {
      alert('인증이 완료되었습니다.');
      console.log(res);
      setIsSuccessCode(true);
    });
  };

  const startCountdown = () => {
    setCountdown(300); // 5분을 초로 환산
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev !== null ? prev - 1 : null));
    }, 1000);

    // 5분 후에 인터벌을 클리어하고 countdown을 초기화
    setTimeout(() => {
      clearInterval(countdownInterval);
      setCountdown(null);
    }, 300000);
  };

  const formatCountdown = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleEmailCode = () => {
    client.post(`/user/join/sendEmailCode?email=${registerForm.email}`).then((res) => {
      alert('인증을 위해 메일함을 확인해주세요.');
      console.log(res);
      startCountdown();
    });
  };

  const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCode(e.target.value);
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    if (id === 'all') {
      setAgree({
        personalInfo: checked,
        adInfo: checked,
      });
    } else {
      setAgree((prevState) => ({
        ...prevState,
        [id]: !prevState[id as keyof AgreeType],
      }));
    }
  };

  return (
    <Container>
      <Spacing direction="vertical" size={68} />
      <SignupTitle>회원가입</SignupTitle>
      <Spacing direction="vertical" size={16} />
      <SignupText>회원가입을 하면 숭차로에서 다양한 지식과 답변을 공유할 수 있어요.</SignupText>
      <Spacing direction="vertical" size={56} />
      <SubText>닉네임</SubText>
      <Spacing direction="vertical" size={16} />
      <TextInput
        type="text"
        width="640px"
        height="56px"
        onChange={(e) => handleNickname(e.target.value)}
        hasError={!isNicknameValid(registerForm.membername)}
        errorMessage={
          registerForm.membername && !isNicknameValid(registerForm.membername) ? nicknameError : ''
        }
      />
      <Spacing direction="vertical" size={32} />
      <SubText>숭실대 이메일</SubText>
      <Spacing direction="vertical" size={16} />
      <InputFlex>
        <TextInputContainer>
          <InputContainer>
            <TextInput
              type="email"
              width="470px"
              height="56px"
              onChange={(e) => handleEmail(e.target.value)}
              hasError={!isEmailValid(registerForm.email)}
              errorMessage={
                registerForm.email && !isEmailValid(registerForm.email) ? emailError : ''
              }
            />
          </InputContainer>
        </TextInputContainer>
        <CheckedBtn
          children="인증코드 전송"
          able={isEmailValid(registerForm.email)}
          onClick={() => {
            handleEmailCode();
          }}
        />
      </InputFlex>
      <Spacing direction="vertical" size={32} />
      <SubText>인증코드 입력</SubText>
      <Spacing direction="vertical" size={16} />
      <InputFlex>
        <TextInputContainer>
          <InputContainer>
            <TextInput
              type="text"
              width="510px"
              height="56px"
              onChange={handleCode}
              hasError={!(isCode.length === 4 && /^\d{4}$/.test(isCode))}
              errorMessage={
                isCode && !(isCode.length === 4 && /^\d{4}$/.test(isCode))
                  ? '인증코드 숫자 4자리를 입력해주세요.'
                  : ''
              }
            />
            {isSuccessCode ? (
              <OkStyle>
                <Ok alt="ok" width="24" height="24" />
              </OkStyle>
            ) : (
              countdown !== null && <CountdownText>{formatCountdown(countdown)}</CountdownText>
            )}
          </InputContainer>
        </TextInputContainer>
        <CheckedBtn
          children="인증하기"
          able={isCode.length === 4 && /^\d{4}$/.test(isCode) && !isSuccessCode}
          onClick={() => {
            handleCertificate();
          }}
        />
      </InputFlex>
      <Spacing direction="vertical" size={32} />
      <SubText>비밀번호</SubText>
      <Spacing direction="vertical" size={16} />
      <TextInput
        type="password"
        width="640px"
        height="56px"
        onChange={(e) => handlePassword(e.target.value)}
        hasError={!isPasswordValid(registerForm.password)}
        errorMessage={
          registerForm.password && !isPasswordValid(registerForm.password) ? passwordError : ''
        }
      />
      <Spacing direction="vertical" size={32} />
      <SubText>비밀번호 확인</SubText>
      <Spacing direction="vertical" size={16} />
      <TextInput
        type="password"
        width="640px"
        height="56px"
        onChange={(e) => handlePasswordConfirm(e.target.value)}
        hasError={!isPasswordConfirmValid(registerForm.passwordchecker)}
        errorMessage={
          registerForm.passwordchecker && !isPasswordConfirmValid(registerForm.passwordchecker)
            ? passwordConfirmError
            : ''
        }
      />
      <Spacing direction="vertical" size={32} />
      <CheckBoxContainer>
        <CheckedDiv>
          <CheckedInput
            type="checkbox"
            id="all"
            checked={personalInfo && adInfo}
            onChange={handleCheck}
          />
          <Spacing direction="horizontal" size={8} />
          <CheckedLabel id="all" size="L">
            약관 전체 동의
          </CheckedLabel>
        </CheckedDiv>
        <CheckedDiv>
          <CheckedInput
            type="checkbox"
            id="personalInfo"
            checked={personalInfo}
            onChange={handleCheck}
          />
          <Spacing direction="horizontal" size={8} />
          <CheckedLabel size="M">
            이용약관 동의 <SpanStyle color="primary">(필수)</SpanStyle>
          </CheckedLabel>
        </CheckedDiv>
        <CheckedDiv>
          <CheckedInput type="checkbox" id="adInfo" checked={adInfo} onChange={handleCheck} />
          <Spacing direction="horizontal" size={8} />
          <CheckedLabel size="M">
            홍보, 설문 관련 정보 동의 <SpanStyle color="gray">(선택)</SpanStyle>
          </CheckedLabel>
        </CheckedDiv>
      </CheckBoxContainer>
      <Spacing direction="vertical" size={68} />
      <Link href="/signin">
        <SquareBtn
          children="회원가입"
          able={
            !!(
              isNicknameValid(registerForm.membername) &&
              isPasswordValid(registerForm.password) &&
              isPasswordConfirmValid(registerForm.passwordchecker) &&
              personalInfo &&
              isSuccessCode
            )
          }
          onClick={() => {
            postSignupForm(registerForm);
          }}
        />
      </Link>
      <Spacing direction="vertical" size={111} />
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  width: 640px;
  margin: 0 auto;
`;

const SignupTitle = styled.div`
  color: var(--black, #1d1d1d);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SignupText = styled.div`
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${theme.fontStyles.Text_M.fontWeight};
  color: ${theme.colors.gray3};
`;

const SubText = styled.div`
  font-size: ${theme.fontStyles.Text_L.fontSize}px;
  font-weight: ${theme.fontStyles.Text_L.fontWeight};
  color: ${theme.colors.black};
`;

const InputFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CheckedDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CheckedInput = styled.input`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 2px solid ${theme.colors.gray3};
  cursor: pointer;

  &:checked {
    accent-color: ${theme.colors.gray3};
  }
`;

const CheckedLabel = styled.label<FontProps>`
  color: ${theme.colors.black};
  font-size: ${(props) =>
    props.size === 'M' ? theme.fontStyles.Text_M.fontSize : theme.fontStyles.Text_L.fontSize}px;
  font-weight: ${(props) =>
    props.size === 'M' ? theme.fontStyles.Text_M.fontWeight : theme.fontStyles.Text_L.fontWeight};
`;

const SpanStyle = styled.span<FontProps>`
  color: ${(props) => (props.color === 'primary' ? theme.colors.primary : theme.colors.gray2)};
`;

const TextInputContainer = styled.div`
  width: 500px;
`;

const InputContainer = styled.div`
  position: relative;
  justify-content: center;
  flex-direction: column;
`;

const CountdownText = styled.span`
  position: absolute;
  top: 50%;
  right: 16px; // 오른쪽 여백 조정
  transform: translateY(-50%);
  font-size: 18px; // 원하는 크기로 조정
  color: ${theme.colors.primary};
  font-weight: 400;
`;

const OkStyle = styled.div`
  position: absolute;
  top: 50%;
  right: 16px; // 오른쪽 여백 조정
  transform: translateY(-50%);
`;
