// ItemComp.tsx

import React, { useState } from 'react';
import { Item } from '../../../services/types/types';
import EditItemForm from './EditItemForm';
import DeleteItemButton from './DeleteItemButton';

interface ItemProps {
  item: Item;
}

const ItemComp: React.FC<ItemProps> = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleCloseEditForm = () => {
    setIsEditing(false); // Fechar o formulário de edição
  };

  return (
    <li key={item.id}>
      {isEditing ? (
        <EditItemForm item={item} onClose={handleCloseEditForm} />
      ) : (
        <>
          {item.name}
          <button onClick={toggleEdit}>Editar</button>
          <DeleteItemButton itemId={item.id} />
        </>
      )}
    </li>
  );
};

export default ItemComp;
