import styled from 'styled-components';
import theme from '@/styles/theme';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import useIsOverflow from '@/hooks/useIsOverflow';
import { useRouter } from 'next/router';
import { FieldType } from '@/types/question.type';
import Tag from '../Tag';
import Spacing from '../Spacing';
import StackTagsWrap from './atoms/StackTagsWrap';

interface CardProps {
  id: number;
  title: string;
  content: string;
  tags: string[];
  fields: FieldType[] | string[];
  postTime: string | null;
  hits: number;
  answerCount: number;
}

const Card = ({ id, title, content, tags, fields, postTime, hits, answerCount }: CardProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const [scrollState, setScrollState] = useState<'left' | 'right'>('right');

  // onClick
  const moveRight = (moveRef: MutableRefObject<HTMLDivElement | null>) => {
    const { current } = moveRef;

    if (current) {
      current.scrollLeft = current.scrollWidth - current.clientWidth;
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
    if (moveRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = moveRef.current;
      if (scrollLeft <= (scrollWidth - clientWidth) / 2) {
        setScrollState('right');
      } else {
        setScrollState('left');
      }
    }
  };

  useEffect(() => {
    const currentRef = ref.current;

    if (currentRef) {
      currentRef.addEventListener('scroll', () => handleScroll(ref));
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', () => handleScroll(ref));
      }
    };
  }, []);

  const handleGoRead = () => {
    router.push(`/questionRead/${id}`);
  };

  return (
    <StyledCard
      onClick={() => {
        handleGoRead();
      }}
    >
      <StackTagsArea>
        <StackTagsWrap ref={ref}>
          {fields ? (
            fields.map((field) => (
              <>
                <Tag color="color" size="small">
                  <p key={field}>{field}</p>
                </Tag>
                <Spacing direction="horizontal" size={8} />
              </>
            ))
          ) : (
            <Blank />
          )}
        </StackTagsWrap>
      </StackTagsArea>
      <Spacing direction="vertical" size={16} />
      <Title>{title}</Title>
      <Spacing direction="vertical" size={16} />
      <ContentText>{content}</ContentText>
      <Spacing direction="vertical" size={16} />
      <StackTagsArea>
        <StackTagsWrap ref={ref}>
          {tags ? (
            tags.map((tag) =>
              tag.trim() ? (
                <>
                  <Tag color="gray" size="big">
                    <p>{tag}</p>
                  </Tag>
                  <Spacing direction="horizontal" size={8} />
                </>
              ) : (
                <Blank />
              ),
            )
          ) : (
            <Blank />
          )}
        </StackTagsWrap>
        {useIsOverflow({ ref }) && scrollState === 'right' && (
          <OverflowBoxRight>
            <ButtonRight
              onClick={(e) => {
                e.stopPropagation();
                moveRight(ref);
              }}
            />
          </OverflowBoxRight>
        )}
        {useIsOverflow({ ref }) && scrollState === 'left' && (
          <OverflowBoxLeft>
            <ButtonLeft
              onClick={(e) => {
                e.stopPropagation();
                moveLeft(ref);
              }}
            />
          </OverflowBoxLeft>
        )}
      </StackTagsArea>
      <Spacing direction="vertical" size={16} />
      <InfoTextWrap>
        <InfoText>{postTime}</InfoText>
        <InfoTwoTextWrap>
          <InfoText>{`조회수 ${hits}`}</InfoText>
          <Spacing direction="horizontal" size={16} />
          <InfoText>{`답변 ${answerCount}`}</InfoText>
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
  cursor: pointer;
`;

const ContentText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-size: ${theme.fontStyles.Text_S.fontSize}px;
  height: 51px;
  color: ${theme.colors.gray3};
  word-break: break-all;
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
  background-image: url('img/gradientRight.svg');
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
  background-image: url('/img/gradientLeft.svg');
`;

const ButtonLeft = styled.div`
  height: 16px;
  width: 16px;
  background-image: url('/img/leftArrow.svg');
`;

const ButtonRight = styled.div`
  height: 16px;
  width: 16px;
  background-image: url('/img/rightArrow.svg');
`;

const Blank = styled.div`
  display: flex;
  height: 24px;
  width: 100%;
`;
