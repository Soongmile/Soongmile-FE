import styled from 'styled-components';
import theme from '@/styles/theme';
import Spacing from '@/components/reusable/Spacing';
import ToggleBtn from '@/components/reusable/Buttons/ToggleBtn';
import { useRecoilState } from 'recoil';
import fieldListState from '@/states/fieldListState';
import { useState } from 'react';
import { FieldType } from '@/types/questionWrite.type';
import QuestionTitle from './QuestionTitle';

interface FieldSelectorProps {
  onChange: (value: FieldType[]) => void;
}

const FieldSelector = ({ onChange }: FieldSelectorProps) => {
  const [fieldList, setFieldList] = useRecoilState(fieldListState);
  const [selectedField, setSelectedField] = useState<FieldType[]>([]);

  // 클릭된 버튼을 관리합니다 (UI)
  const toggleBtnOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
        } else if (count >= 3) {
          alert('최대 3개까지 선택할 수 있습니다.');
        }
      }
    }
  };

  // 선택된 데이터를 관리합니다 (request시 사용될 데이터)
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    toggleBtnOnClick(e);

    if (!selectedField.includes(e.currentTarget.value as FieldType)) {
      const newSelectedField = [...selectedField, e.currentTarget.value as FieldType];
      setSelectedField(newSelectedField);
      onChange(newSelectedField);
    } else {
      const newSelectedField = [...selectedField].filter(
        (item) => item !== (e.currentTarget.value as FieldType),
      );
      setSelectedField(newSelectedField);
      onChange(newSelectedField);
    }
  };

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
          value="PRODUCT_MANAGER"
          able={fieldList.PRODUCT_MANAGER}
          onClick={(e) => {
            toggleBtnOnClick(e);
            handleOnClick(e);
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
            handleOnClick(e);
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
            handleOnClick(e);
          }}
        >
          모바일
        </ToggleBtn>
        <Spacing size={16} direction="horizontal" />
        <ToggleBtn
          value="FRONTEND"
          able={fieldList.FRONTEND}
          onClick={(e) => {
            toggleBtnOnClick(e);
            handleOnClick(e);
          }}
        >
          프론트엔드
        </ToggleBtn>
        <Spacing size={16} direction="horizontal" />
        <ToggleBtn
          value="BACKEND"
          able={fieldList.BACKEND}
          onClick={(e) => {
            toggleBtnOnClick(e);
            handleOnClick(e);
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
            handleOnClick(e);
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
  align-items: center;
`;

const Tip = styled.div`
  font-size: ${theme.fontStyles.Text_S.fontSize}px;
  font-weight: ${theme.fontStyles.Text_S.fontWeight};
`;

const QuestionTip = styled(Tip)`
  color: ${theme.colors.gray3};
`;

const ToggleBtnWrap = styled.div`
  display: flex;
`;
