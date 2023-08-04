import styled from 'styled-components';
import theme from '@/styles/theme';
import Spacing from '@/components/reusable/Spacing';
import ToggleBtn from '@/components/reusable/Buttons/ToggleBtn';
import { useEffect, useState } from 'react';
import QuestionTitle from './QuestionTitle';

const FieldSelector = () => {
  interface FieldListType {
    [key: string]: boolean;
  }

  const [fieldList, setFieldList] = useState<FieldListType>({
    PM: true,
    DESIGN: true,
    MOBILE: true,
    BE: true,
    FE: true,
    SCHOOL: true,
  });

  const toggleBtnOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newFieldList = { ...fieldList };
    const count = Object.values(fieldList).filter((element) => element === false).length;

    for (const newField in newFieldList) {
      if (newField === e.currentTarget.value) {
        if (!newFieldList[newField]) {
          newFieldList[newField] = true;
          setFieldList(newFieldList);
        } else if (count < 3) {
          newFieldList[newField] = false;
          setFieldList(newFieldList);
        }
      }
    }
  };

  useEffect(() => {
    console.log(fieldList);
  }, [fieldList]);

  return (
    <section>
      <Spacing size={32} direction="vertical" />
      <QuestionTitleWrap>
        <QuestionTitle titleName="분야" />
        <Spacing size={11} direction="horizontal" />
        <QuestionTip>1개를 반드시 선택해주세요.</QuestionTip>
      </QuestionTitleWrap>
      <Spacing size={16} direction="vertical" />
      <ToggleBtnWrap>
        <ToggleBtn
          value="PM"
          able={fieldList.PM}
          onClick={(e) => {
            toggleBtnOnClick(e);
          }}
        >
          기획/PM
        </ToggleBtn>
        <Spacing size={16} direction="horizontal" />
        <ToggleBtn
          value="DESIGN"
          able={fieldList.DESIGN}
          onClick={(e) => {
            toggleBtnOnClick(e);
          }}
        >
          디자인
        </ToggleBtn>
        <Spacing size={16} direction="horizontal" />
        <ToggleBtn
          value="MOBILE"
          able={fieldList.MOBILE}
          onClick={(e) => {
            toggleBtnOnClick(e);
          }}
        >
          모바일
        </ToggleBtn>
        <Spacing size={16} direction="horizontal" />
        <ToggleBtn
          value="FE"
          able={fieldList.FE}
          onClick={(e) => {
            toggleBtnOnClick(e);
          }}
        >
          프론트엔드
        </ToggleBtn>
        <Spacing size={16} direction="horizontal" />
        <ToggleBtn
          value="BE"
          able={fieldList.BE}
          onClick={(e) => {
            toggleBtnOnClick(e);
          }}
        >
          백엔드
        </ToggleBtn>
        <Spacing size={16} direction="horizontal" />
        <ToggleBtn
          value="SCHOOL"
          able={fieldList.SCHOOL}
          onClick={(e) => {
            toggleBtnOnClick(e);
          }}
        >
          학교 생활
        </ToggleBtn>
      </ToggleBtnWrap>
    </section>
  );
};
export default FieldSelector;

const QuestionTitleWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tip = styled.div`
  font-size: ${theme.fontStyles.Text_S.fontSize};
  font-weight: ${theme.fontStyles.Text_S.fontWeight};
`;

const QuestionTip = styled(Tip)`
  color: ${theme.colors.gray3};
`;

const ToggleBtnWrap = styled.div`
  display: flex;
`;
