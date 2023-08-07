import styled from 'styled-components';
import theme from '@/styles/theme';
import { useRecoilState } from 'recoil';
import searchTagState from '@/states/searchTagState';
import Spacing from '../../../components/reusable/Spacing';

interface SearchTagProps {
  name: string;
}

const SearchTag = ({ name }: SearchTagProps) => {
  const [serchTags, setSearchTags] = useRecoilState(searchTagState);

  const handleXOnClick = () => {
    const newSearchTags = [...serchTags];
    const removeInd = newSearchTags.indexOf(name);
    newSearchTags.splice(removeInd, 1);

    setSearchTags(newSearchTags);
  };
  return (
    <StyledSearchTag>
      <p>{name}</p>
      <Spacing size={8} direction="horizontal" />
      <Ximg onClick={handleXOnClick} />
    </StyledSearchTag>
  );
};

export default SearchTag;

const StyledSearchTag = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 8px 6px 12px;
  height: 24px;
  width: fit-content;
  border-radius: 8px;
  background-color: ${theme.colors.black_tag};
  color: ${theme.colors.gray3};
  font-size: ${theme.fontStyles.Caption.fontSize}px;
  font-size: ${theme.fontStyles.Caption.fontWeight};
`;

const Ximg = styled.div`
  width: 18px;
  height: 18px;
  background-image: url('img/X.svg');
`;
