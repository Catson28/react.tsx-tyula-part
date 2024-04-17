import React from 'react';
import styled from 'styled-components';

const TwoColumnLayoutContainer = styled.div`
  display: inline-flex;
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Use minmax para ajuste automático *
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

interface TwoColumnLayoutProps {
  children: React.ReactNode;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({ children }) => {
  return (
    <TwoColumnLayoutContainer>
      {React.Children.map(children, (child, index) => (
        <div key={index}>{child}</div>
      ))}
    </TwoColumnLayoutContainer>
  );
};

export default TwoColumnLayout;
