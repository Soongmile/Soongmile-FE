import { styled } from 'styled-components';
import theme from '../../styles/theme';
import Spacing from './Spacing';

interface TextProps {
  size: 'M' | 'L';
}

const Footer = () => {
  return (
    <Container>
      <Spacing direction="vertical" size={62} />
      <FooterFlex>
        <WhiteLogo />
        <TextFlex>
          <WHiteText size="L">Contact</WHiteText>
          <WHiteText size="M">Soongcharo@gmail.com</WHiteText>
        </TextFlex>
      </FooterFlex>
      <Spacing direction="vertical" size={150} />
      <Line />
      <Spacing direction="vertical" size={32} />
      <FooterFlex>
        <WHiteText size="M">Copyright ⓒ Soongcharo All Rights Reserved.</WHiteText>
        <TextFlex>
          <WHiteText size="M">이용약관</WHiteText>
          <WHiteText size="M">숭차로 운영 정책</WHiteText>
          <WHiteText size="L">개인정보 처리방침</WHiteText>
        </TextFlex>
      </FooterFlex>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 352px;
  padding-left: 240px;
  padding-right: 240px;
  position: relative;
  bottom: 0;
  background-color: ${theme.colors.footer};
  border-bottom: 2px solid ${theme.colors.gray1};
  align-items: center;
`;

const WhiteLogo = styled.div`
  width: 68px;
  height: 24px;
  background-image: url('whiteLogo.svg');
`;

const FooterFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const WHiteText = styled.div<TextProps>`
  color: ${theme.colors.white};
  font-size: ${(props) =>
    props.size === 'M' ? theme.fontStyles.Text_M.fontSize : theme.fontStyles.Text_L.fontSize}px;
  font-weight: ${(props) =>
    props.size === 'M' ? theme.fontStyles.Text_M.fontWeight : theme.fontStyles.Text_L.fontWeight};
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.gray2};
`;
