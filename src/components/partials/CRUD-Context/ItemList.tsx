// ItemList.tsx

import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { omit, Omit } from 'lodash';
import { useCrud } from '../../../services/context/CrudContext';
import { Item } from '../../../services/types/types';
import ItemComponent from './ItemComp'; // Importe o componente Item
import InsertItemForm from '../InsertItemForm'; // Importe o componente InsertItemForm

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
      background-size: 1600px 100%;
    `}
`;

type OmitLoading = Omit<ListItemProps, 'isLoading'>;

const TransientListItem = styled(ListItem)<ListItemProps>`
  ${(props) => omit(props as OmitLoading, ['isLoading'])}
`;


const ItemList: React.FC = () => {
  const { state } = useCrud();
  const [isFormVisible, setIsFormVisible] = useState(false); // Estado para controlar a visibilidade do formulário

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleAddItem = () => {
    toggleFormVisibility(); // Ao adicionar um item, oculte o formulário
  };


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
          {isFormVisible && <InsertItemForm onAddItem={handleAddItem} />} {/* Renderizar o formulário de inserção se isFormVisible for true */}
          <button onClick={toggleFormVisibility}>
            {isFormVisible ? 'Cancelar' : 'Adicionar Novo Item'} {/* Alternar entre adicionar um novo item e cancelar/ocultar o formulário */}
          </button>
          <ul>
            {state.items.map((item: Item) => (
              <ItemComponent key={item.id} item={item} />
            ))}
          </ul>
        </>
      )}
    </ListContainer>
  );
};

export default ItemList;