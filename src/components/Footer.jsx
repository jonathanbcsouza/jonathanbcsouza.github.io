import styled from 'styled-components';
import { SocialMedia } from './SocialMedia';

const currentYear = new Date().getFullYear();

// Sits in normal flow. #root is a flex column and main grows, so this lands at
// the bottom of the viewport on short pages without being position:fixed.
const StyledFooter = styled.footer`
  flex-shrink: 0;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px 5% 24px;
  font-size: 12px;
  color: var(--text-orange);
  text-align: center;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <SocialMedia />
      <p>Copyright {currentYear} © Jonathan Souza</p>
    </StyledFooter>
  );
};
