import React, { ReactNode } from 'react';
import styled from 'styled-components';

// Estilos para o componente de título
const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const TitleText = styled.h1`
  font-size: 24px;
  color: #333;
`;

// Definição do tipo para a propriedade children
type GraphtitleProps = {
  children: ReactNode;
};

// Componente de título da página
const Graphtitle = ({ children }: GraphtitleProps) => (
  <TitleContainer>
    <TitleText>{children}</TitleText>
  </TitleContainer>
);

export default Graphtitle;
