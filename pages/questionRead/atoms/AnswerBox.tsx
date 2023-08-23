import Spacing from '@/components/reusable/Spacing';
import theme from '@/styles/theme';
import styled from 'styled-components';

interface AnswerBoxProps {
  // 추후 데이터 넘어오는 방식에 따라서 변경 예정
  userName: string;
}

const AnswerBox = ({ userName }: AnswerBoxProps) => {
  return (
    <StyledAnswerBox>
      <TitleWrap>
        <Title>
          <span className="title-username">{`A. ${userName}`}</span>
          <span className="title-answer">님의 답변</span>
        </Title>
        <Declaration>신고</Declaration>
      </TitleWrap>
      <Spacing size={24} direction="vertical" />
      <AnswerContent>
        경영학을 심도깊게 배우고자 하는 경우, 다음과 같은 인강 사이트와 공부 방법, 그리고 추천
        도서를 고려해볼 수 있습니다. <br />
        <br />
        인강 사이트: <br />
        1. Coursera (https://www.coursera.org/): Coursera는 유명 대학의 경영학 강의를 비롯한 다양한
        온라인 강의를 제공합니다. 경영학에 관련된 강좌들을 찾아보고, 강의 퀄리티와 교수진을 확인하여
        선택할 수 있습니다. <br /> 2. edX (https://www.edx.org/): edX도 Coursera와 마찬가지로
        세계적인 대학들의 경영학 관련 강의를 제공합니다. 고품질의 강의와 다양한 주제를 제공하므로
        참고해보세요. <br /> 3. Harvard Business School Online (https://online.hbs.edu/): 하버드
        비즈니스 스쿨에서 운영하는 온라인 강의 플랫폼으로, 다양한 경영 관련 강의를 제공합니다.
        전문적이고 광범위한 주제를 다루므로 심도깊게 학습할 수 있습니다. <br />
        <br />
        공부 방법: <br /> 1. 체계적인 계획 수립: 경영학의 다양한 분야를 다루기 위해 체계적인 학습
        계획을 수립해야 합니다. 주제를 구분하고 순서를 정하여 조금씩 꾸준히 학습하도록 계획해보세요.
        <br />
        2. 참고 자료 활용: 강의 외에도 경영학에 대한 참고 자료들을 활용하세요. 논문, 서적, 학술지
        등을 통해 심층적인 이해를 도모할 수 있습니다. <br />
        3. 실전 적용: 이론을 학습한 후, 실제 비즈니스 상황에 적용해보세요. 케이스 스터디, 프로젝트,
        시뮬레이션 등을 통해 경영 이론을 실전에 적용하며 실력을 향상시킬 수 있습니다.
      </AnswerContent>
      <Spacing size={24} direction="vertical" />
      <Date>07/07</Date>
    </StyledAnswerBox>
  );
};

export default AnswerBox;

const StyledAnswerBox = styled.div`
  width: 944px;
  padding: 32px;
  border-radius: 16px;
  border: ${`1px solid ${theme.colors.gray2}`};
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: ${theme.fontStyles.Title_S.fontSize}px;
  font-weight: ${theme.fontStyles.Title_S.fontWeight};

  & > .title-username {
    color: ${theme.colors.alert};
  }

  & > .title-answer {
    color: ${theme.colors.black};
  }
`;

const Declaration = styled.div`
  font-size: ${theme.fontStyles.Text_L.fontSize}px;
  font-weight: ${theme.fontStyles.Text_L.fontWeight};
  color: ${theme.colors.gray2};
`;

const AnswerContent = styled.div`
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${theme.fontStyles.Text_M.fontWeight};
  color: ${theme.colors.black};
`;

const Date = styled.div`
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${theme.fontStyles.Text_M.fontWeight};
  color: ${theme.colors.gray2};
  align-self: self-end;
`;
