import styled from 'styled-components';
import theme from '@/styles/theme';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import useIsOverflow from '@/hooks/useIsOverflow';
import Tag from '../Tag';
import Spacing from '../Spacing';
import StackTagsWrap from './atoms/StackTagsWrap';

const Card = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [scrollState, setScrollState] = useState<'left' | 'right'>('right');

  // onClick
  const moveRight = (moveRef: MutableRefObject<HTMLDivElement | null>) => {
    const { current } = moveRef;

    if (current) {
      current.scrollLeft = current.scrollWidth;
    }
  };

  const moveLeft = (moveRef: MutableRefObject<HTMLDivElement | null>) => {
    const { current } = moveRef;

    if (current) {
      current.scrollLeft = 0;
    }
  };

  // EventListener
  const handleScroll = (moveRef: MutableRefObject<HTMLDivElement | null>) => {
    const { current } = moveRef;

    if (current) {
      if (current.scrollLeft <= (current.scrollWidth - current.clientWidth) / 2) {
        setScrollState('right');
      } else {
        setScrollState('left');
      }
    }
  };

  useEffect(() => {
    const { current } = ref;

    if (current) {
      current.addEventListener('scroll', () => handleScroll(ref));
    }
    return () => {
      if (current) {
        window.removeEventListener('scroll', () => handleScroll(ref));
      } // clean up
    };
  }, []);

  return (
    <StyledCard>
      <Tag variant="color" content="직무" />
      <Spacing direction="vertical" size={16} />
      <Title>제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다</Title>
      <Spacing direction="vertical" size={16} />
      <ContentText>
        내용 미리보기 최대 3줄 (약 40자) 내용 미리보기 최대 3줄 (약 40자) 내용 미리보기 최대 3줄 (약
        40자) 내용 미리보기 내용 미리보기 최대 3줄 (약 40자) 내용 미리보기 최대 3줄 (약 40자) 내용
        미리보기 최대 3줄 (약 40자) 내용 미리보기
      </ContentText>
      <Spacing direction="vertical" size={16} />
      <StackTagsArea>
        <StackTagsWrap ref={ref}>
          <Tag variant="gray" content="스택2222" />
          <Spacing direction="horizontal" size={8} />
          <Tag variant="gray" content="스택" />
          <Spacing direction="horizontal" size={8} />
          <Tag variant="gray" content="스택" />
          <Spacing direction="horizontal" size={8} />
          <Tag variant="gray" content="스택" />
          <Spacing direction="horizontal" size={8} />
          <Tag variant="gray" content="스택" />
          <Spacing direction="horizontal" size={8} />
          <Tag variant="gray" content="스택" />
        </StackTagsWrap>
        {useIsOverflow({ ref }) && scrollState === 'right' && (
          <OverflowBoxRight>
            <ButtonRight onClick={() => moveRight(ref)} />
          </OverflowBoxRight>
        )}
        {useIsOverflow({ ref }) && scrollState === 'left' && (
          <OverflowBoxLeft>
            <ButtonLeft onClick={() => moveLeft(ref)} />
          </OverflowBoxLeft>
        )}
      </StackTagsArea>
      <Spacing direction="vertical" size={16} />
      <InfoTextWrap>
        <InfoText>{`${35}분전`}</InfoText>
        <InfoTwoTextWrap>
          <InfoText>{`조회수 ${100}`}</InfoText>
          <Spacing direction="horizontal" size={16} />
          <InfoText>{`답변 ${3}`}</InfoText>
        </InfoTwoTextWrap>
      </InfoTextWrap>
    </StyledCard>
  );
};

export default Card;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 280px;
  height: 240px;
  border-radius: 8px;
  border: 1px solid var(--gray-1, #f2f4f6);
  background: var(--white, #fff);
  padding: 21px 32px 20px 32px;
`;

const ContentText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-size: ${theme.fontStyles.Text_S.fontSize}px;
  height: 51px;
  color: ${theme.colors.gray3};
`;

const Title = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: ${theme.fontStyles.Text_L.fontSize}px;
  font-weight: ${theme.fontStyles.Text_L.fontWeight};
`;

const InfoTextWrap = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InfoText = styled.span`
  font-size: ${theme.fontStyles.Caption.fontSize}px;
  font-weight: ${theme.fontStyles.Caption.fontWeight};
`;

const InfoTwoTextWrap = styled(InfoTextWrap)`
  width: fit-content;
  justify-content: start;
`;

const StackTagsArea = styled.div`
  position: relative;
  width: 280px;
  margin-left: -32px;
`;

const OverflowBoxRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 24px;
  background-image: url('gradientRight.svg');
`;

const OverflowBoxLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 24px;
  background-image: url('gradientLeft.svg');
`;

const ButtonLeft = styled.div`
  height: 16px;
  width: 16px;
  background-image: url('leftArrow.svg');
`;

const ButtonRight = styled.div`
  height: 16px;
  width: 16px;
  background-image: url('rightArrow.svg');
`;
