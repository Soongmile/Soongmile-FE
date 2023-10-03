import searchTagState from '@/states/searchTagState';
import theme from '@/styles/theme';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

interface StackSearchListProps {
  name: string;
}

const StackSearchList = ({ name }: StackSearchListProps) => {
  const [serchTags, setSearchTags] = useRecoilState(searchTagState);

  const handleOnClick = () => {
    if (serchTags.length < 6) {
      const newSearchTags = [...serchTags, name];
      setSearchTags(Array.from(new Set(newSearchTags)));
    } else {
      alert('최대 6개까지만 선택 가능합니다.');
    }
  };

  return <StyledStackSearchList onClick={handleOnClick}>{name}</StyledStackSearchList>;
};

export default StackSearchList;

const StyledStackSearchList = styled.div`
  display: flex;
  align-items: center;
  width: 595px;
  height: 60px;
  border-radius: 8px;
  margin: 0 auto;
  padding-left: 21px;

  color: ${theme.colors.gray3};
  font-size: ${theme.fontStyles.Text_M.fontSize}px;
  font-weight: ${theme.fontStyles.Text_M.fontWeight};

  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.gray1};
  }
`;
