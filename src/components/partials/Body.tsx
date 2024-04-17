import React from 'react';
import styled from 'styled-components';

const BodyContainer = styled.div`
  padding: 20px;
`;

interface BodyProps {
  children: React.ReactNode; // Defina o tipo dos atributos
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return <BodyContainer>{children}</BodyContainer>;
};

export default Body;
