import type { NextPage } from 'next';
import { styled } from 'styled-components';
import Spacing from '../components/reusable/Spacing';
import theme from '../styles/theme';
import TextInput from '../components/reusable/TextInput';
import SquareBtn from '../components/reusable/Buttons/SquareBtn';
import Link from 'next/link';
import { useState } from 'react';

const Signin: NextPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Container>
      <Spacing direction="vertical" size={68} />
      <SigninTitle>로그인</SigninTitle>
      <Spacing direction="vertical" size={16} />
      <SigninText>숭차로에서 다양한 지식과 답변을 공유해보세요.</SigninText>
      <Spacing direction="vertical" size={56} />
      <SubText>이메일</SubText>
      <Spacing direction="vertical" size={16} />
      <TextInput type="email" width="640px" height="56px" />
      <Spacing direction="vertical" size={32} />
      <SubText>비밀번호</SubText>
      <Spacing direction="vertical" size={16} />
      <TextInput type="password" width="640px" height="56px" />
      <Spacing direction="vertical" size={64} />
      <BtnContainer>
        <SquareBtn children="로그인" />
        <FindFlex>
          <Link href="/find">비밀번호 찾기</Link>
          <span>|</span>
          <Link href="/signup">회원가입</Link>
        </FindFlex>
      </BtnContainer>
    </Container>
  );
};

export default Signin;

const Container = styled.div`
  width: 640px;
  margin: 0 auto;
`;

const SigninTitle = styled.div`
  color: var(--black, #1d1d1d);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SigninText = styled.div`
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${theme.fontStyles.Text_M.fontWeight};
  color: ${theme.colors.gray3};
`;

const SubText = styled.div`
  font-size: ${theme.fontStyles.Text_L.fontSize}px;
  font-weight: ${theme.fontStyles.Text_L.fontWeight};
  color: ${theme.colors.black};
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const FindFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;

  color: ${theme.colors.gray2};
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${theme.fontStyles.Text_M.fontWeight};
`;
