import { BE, DESIGN, FE, MOBILE, PM, SCHOOL } from '@/const';
import BoardState from '@/states/BoardState';
import currentState from '@/states/CurrentState';
import sideBarState from '@/states/sideBarState';
import theme from '@/styles/theme';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

interface SideBarListProps {
  href: string;
  title: string;
}

interface QuestionType {
  id: number;
  title: string;
  content: string;
  tags: [];
  fields: string[];
  postTime: string;
  hits: number;
  answerCount: number;
}

const SideBarList = ({ href, title }: SideBarListProps) => {
  const [currentSideBar, setCurrentSideBar] = useRecoilState<string>(sideBarState);
  const [currentTitle, setCurrentTitle] = useRecoilState<string>(currentState);
  const [currentBoard, setCurrentBoard] = useRecoilState<QuestionType[]>(BoardState);
  const [originalBoard, setOriginalBoard] = useState<QuestionType[]>([]);

  useEffect(() => {
    setOriginalBoard(currentBoard);
  }, [currentBoard, originalBoard]);

  const handleFieldsFilter = () => {
    if (currentTitle === '전체') {
      setCurrentBoard(originalBoard);
    } else {
      const filteredBoard = originalBoard.filter((item) => {
        if (currentTitle === PM) {
          return item.fields.includes('PRODUCT_MANAGER');
        }
        if (currentTitle === DESIGN) {
          return item.fields.includes('DESIGN');
        }
        if (currentTitle === MOBILE) {
          return item.fields.includes('MOBILE');
        }
        if (currentTitle === BE) {
          return item.fields.includes('BACKEND');
        }
        if (currentTitle === FE) {
          return item.fields.includes('FRONTEND');
        }
        if (currentTitle === SCHOOL) {
          return item.fields.includes('SCHOOL');
        }
        return false;
      });

      // 현재 상태와 필터링된 결과가 다를 때만 업데이트
      if (JSON.stringify(currentBoard) !== JSON.stringify(filteredBoard)) {
        setCurrentBoard(filteredBoard);
      }
    }
  };

  useEffect(() => {
    handleFieldsFilter();
  }, [currentTitle, originalBoard]);

  return (
    <StyledSideBarList
      title={title}
      currentsidebar={currentSideBar}
      currenttitle={currentTitle}
      onClick={() => {
        setCurrentSideBar(href);
        setCurrentTitle(title);
      }}
    >
      {title}
    </StyledSideBarList>
  );
};

export default SideBarList;

interface StyledSideBarListProps {
  currentsidebar: string;
  currenttitle: string;
}

const StyledSideBarList = styled.a<StyledSideBarListProps>`
  font-size: ${theme.fontStyles.Text_M.fontSize};
  font-weight: ${(props) =>
    props.currenttitle === props.title
      ? theme.fontStyles.Text_L.fontWeight
      : theme.fontStyles.Text_M.fontWeight};
  color: ${(props) =>
    props.currenttitle === props.title ? theme.colors.black : theme.colors.gray3};
  cursor: pointer;
`;
