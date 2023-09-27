import Spacing from '@/components/reusable/Spacing';
import type { NextPage } from 'next';
import styled from 'styled-components';
import theme from '../styles/theme';
import TextInput from '../components/reusable/Inputs/TextInput';
import CheckedBtn from '../components/reusable/Buttons/CheckedBtn';
import { useState } from 'react';
import SquareBtn from '../components/reusable/Buttons/SquareBtn';
import Link from 'next/link';

interface AgreeType {
  personalInfo: boolean;
  adInfo: boolean;
}

interface FontProps {
  size?: 'M' | 'L';
  color?: 'primary' | 'gray';
}

const Signup: NextPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [{ personalInfo, adInfo }, setAgree] = useState<AgreeType>({
    personalInfo: false,
    adInfo: false,
  });

  const [nicknameError, setNicknameError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [passwordConfirmError, setPasswordConfirmError] = useState<string>('');

  const nicknameCheck = /^[가-힣A-Za-z0-9_]{1,10}$/;
  const passwordCheck = /^[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,20}$/;

  const isNicknameValid = (nickname: string): boolean => {
    return nicknameCheck.test(nickname);
  };
  const isPasswordValid = (password: string): boolean => {
    return passwordCheck.test(password);
  };
  const isPasswordConfirmValid = (passwordConfirm: string): boolean => {
    return password === passwordConfirm;
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    setName(newNickname);
    setNicknameError('');

    if (!isNicknameValid(newNickname)) {
      setNicknameError('1~10자 이내, 한글, 영문, 특수기호(_) 사용 가능');
    } else {
      setNicknameError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordError('');

    if (!isPasswordValid(newPassword)) {
      setPasswordError('8~20자 이내, 문자, 숫자, 특수기호 사용 가능');
    } else {
      setPasswordError('');
    }
  };

  const handlePasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPasswordConfirm = e.target.value;
    setPasswordConfirm(newPasswordConfirm);
    setPasswordConfirmError('');

    if (!isPasswordConfirmValid(newPasswordConfirm)) {
      setPasswordConfirmError('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordConfirmError('');
    }
  };

  const checkedAllInfo = personalInfo && adInfo;

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
        onChange={handleNicknameChange}
        hasError={!isNicknameValid(name)}
        errorMessage={name && !isNicknameValid(name) ? nicknameError : ''}
      />
      <Spacing direction="vertical" size={32} />
      <SubText>이메일</SubText>
      <Spacing direction="vertical" size={16} />
      <InputFlex>
        <TextInput type="email" width="503px" height="56px" />
        <CheckedBtn children="중복확인" able={!!email} />
      </InputFlex>
      <Spacing direction="vertical" size={32} />
      <SubText>비밀번호</SubText>
      <Spacing direction="vertical" size={16} />
      <TextInput
        type="password"
        width="640px"
        height="56px"
        onChange={handlePasswordChange}
        hasError={!isPasswordValid(password)}
        errorMessage={password && !isPasswordValid(password) ? passwordError : ''}
      />
      <Spacing direction="vertical" size={32} />
      <SubText>비밀번호 확인</SubText>
      <Spacing direction="vertical" size={16} />
      <TextInput
        type="password"
        width="640px"
        height="56px"
        onChange={handlePasswordConfirmChange}
        hasError={!isPasswordConfirmValid(passwordConfirm)}
        errorMessage={
          passwordConfirm && !isPasswordConfirmValid(passwordConfirm) ? passwordConfirmError : ''
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
              isNicknameValid(name) &&
              isPasswordValid(password) &&
              isPasswordConfirmValid(passwordConfirm) &&
              personalInfo
            )
          }
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
  gap: 24px;
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
