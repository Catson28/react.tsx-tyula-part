import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { omit, Omit } from 'lodash';

const SkeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

const ListContainer = styled.ul`
  /* Estilos da lista */
`;

interface ListItemProps {
  isLoading: boolean;
}

const ListItem = styled.li<ListItemProps>`
  /* Estilos do item */
  ${({ isLoading }) =>
    isLoading &&
    css`
      animation: ${SkeletonAnimation} 1.5s infinite linear;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200px 100%;
    `}
`;

type OmitLoading = Omit<ListItemProps, 'isLoading'>;

const TransientListItem = styled(ListItem)<ListItemProps>`
  ${(props) => omit(props as OmitLoading, ['isLoading'])}
`;

const CrudList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulação de uma chamada assíncrona
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <ListContainer>
      {isLoading ? (
        <>
          <TransientListItem isLoading={true}>Loading...</TransientListItem>
          <TransientListItem isLoading={true}>Loading...</TransientListItem>
          <TransientListItem isLoading={true}>Loading...</TransientListItem>
        </>
      ) : (
        <>
          {/* Aqui você renderiza a lista real de itens */}
          <ListItem isLoading={false}>Item 1</ListItem>
          <ListItem isLoading={false}>Item 2</ListItem>
          <ListItem isLoading={false}>Item 3</ListItem>
        </>
      )}
    </ListContainer>
  );
};

export default CrudList;
