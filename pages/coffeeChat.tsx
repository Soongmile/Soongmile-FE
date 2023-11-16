import Card from '@/components/reusable/Card';
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { MAINPAGE_MENU_LIST } from '@/const';
import SideBar from '@/components/reusable/SideBar';
import Search from '@/components/reusable/Search';
import Spacing from '@/components/reusable/Spacing';
import { styled } from 'styled-components';
import theme from '@/styles/theme';
import { useRecoilState } from 'recoil';
import usePostBoard from '@/hooks/usePostBoard';
import currentState from '@/states/CurrentState';
import BoardState from '@/states/BoardState';
import colors from '../styles/colors';
import BannerMan from '../assets/BannerMan.svg';
import Left from '../assets/icons/LeftArrow.svg';
import Right from '../assets/icons/RightArrow.svg';

interface QuestionType {
  id: number;
  title: string;
  content: string;
  tags: [];
  fields: [];
  postTime: string;
  hits: number;
  answerCount: number;
}

const CoffeeChat = () => {
  return (
    <Background>
      <Container>🚧 릴리즈 예정입니다. 🚧</Container>
    </Background>
  );
};

export default CoffeeChat;

const Background = styled.div`
  background-color: ${colors.gray0};
`;

const Container = styled.div`
  width: 1120px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 72px - 352px);
  margin: 0 auto;
  font-size: ${theme.fontStyles.Title_S.fontSize}px;
  font-weight: ${theme.fontStyles.Title_S.fontWeight};
`;
