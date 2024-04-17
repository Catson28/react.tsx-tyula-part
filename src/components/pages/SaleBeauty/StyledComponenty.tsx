import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Container = styled.div`
  width: 1000px;
  margin-right: auto;
  margin-left: auto;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
`;

const Button = styled.button<ButtonProps>`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  background-color: ${props => (props.primary ? '#007bff' : '#6c757d')};
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.primary ? '#0056b3' : '#5a6268')};
  }
`;

const StyledComponenty = () => {
  return (
    <ContainerFluid>
      <Container>
        <Toolbar role="toolbar" aria-label="Toolbar with button groups">
          <Heading id="vertical-variation">Lista de Categorias</Heading>
          <div>
            <Button primary type="button">Abrir</Button>
            <Button type="button">Adicionar</Button>
          </div>
        </Toolbar>
      </Container>
    </ContainerFluid>
  );
};

export default StyledComponenty;
