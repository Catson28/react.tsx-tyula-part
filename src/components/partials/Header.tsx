import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>Meu CRUD</h1>
    </HeaderContainer>
  );
};

export default Header;