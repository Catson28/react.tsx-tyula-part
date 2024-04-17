import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Footer: React.FC = () => {
  return <FooterContainer>Feito com amor.</FooterContainer>;
};

export default Footer;