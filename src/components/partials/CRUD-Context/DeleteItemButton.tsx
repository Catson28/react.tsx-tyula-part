// DeleteItemButton.tsx

import React from 'react';
import { useCrud } from '../../../services/context/CrudContext';

interface DeleteItemButtonProps {
  itemId: string;
}

const DeleteItemButton: React.FC<DeleteItemButtonProps> = ({ itemId }) => {
  const { dispatch } = useCrud();

  const handleDeleteItem = () => {
    dispatch({ type: 'DELETE_ITEM', payload: itemId });
  };

  return <button onClick={handleDeleteItem}>Excluir</button>;
};

export default DeleteItemButton;
