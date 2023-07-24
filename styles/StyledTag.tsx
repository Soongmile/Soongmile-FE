import styled from 'styled-components';
import colors from './colors';

const backgroundColor = {
  color: colors.primarybg,
  gray: colors.graybg,
};

const textColor = {
  color: colors.primary,
  gray: colors.gray3,
};

const radiusSize = {
  color: '8px',
  gray: '100px',
};

interface StyledButtonProps {
  readonly variant: 'color' | 'gray';
}

const StyledTag = styled.span<StyledButtonProps>`
  background-color: ${(props) => backgroundColor[props.variant]};
  color: ${(props) => textColor[props.variant]};
  border-radius: ${(props) => radiusSize[props.variant]};
  height: 24px;
  min-width: fit-content;
  font-size: 12px;
  border: none;
  padding: 5px 12px;
  margin: 0;
`;

export default StyledTag;
