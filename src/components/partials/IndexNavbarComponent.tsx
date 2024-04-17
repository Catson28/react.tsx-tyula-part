import React from 'react';
import styled from 'styled-components';

// Definindo os tamanhos de tela
const sizes = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600
};

// Função para criar as media queries
const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = (style: string) => `
      @media (min-width: ${sizes[label]}px) {
        ${style}
      }
    `;
    return acc;
  },
  {} as Record<string, (style: string) => string>
);

// Estilos do componente
const Navbar = styled.div`
  background-color: #333;
  color: #fff;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 0 auto;

  ${media.xs('width: 100%;')}
  ${media.sm('width: 690px;')}
  ${media.md('width: 860px;')}
  ${media.lg('width: 1080px;')}
  ${media.xl('width: 1240px;')}
`;

const Logo = styled.div`
  flex: 1;
`;

const AuthSection = styled.div`
  display: flex;
`;

const AuthButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
  margin: 0 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ${media.sm('font-size: 0.8rem;')}
`;

// Componente Navbar
const IndexNavbarComponent: React.FC = () => {
  return (
    <Navbar>
      <Container>
        <Logo>
          <img src="/path/to/logo.png" alt="Logo" />
        </Logo>
        <AuthSection>
          <AuthButton>Login</AuthButton>
          <AuthButton>Registrar</AuthButton>
        </AuthSection>
      </Container>
    </Navbar>
  );
};

export default IndexNavbarComponent;
