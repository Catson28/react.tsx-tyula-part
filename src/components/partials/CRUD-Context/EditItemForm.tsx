// EditItemForm.tsx

import React, { useState } from 'react';
import { useCrud } from '../../../services/context/CrudContext';
import { Item } from '../../../services/types/types'; // Importe o tipo Item

interface EditItemFormProps {
  item: Item;
  onClose: () => void; // Função para fechar o formulário
}

const EditItemForm: React.FC<EditItemFormProps> = ({ item, onClose }) => {
  const { dispatch } = useCrud();
  const [itemName, setItemName] = useState(item.name);

  const handleEditItem = () => {
    dispatch({ type: 'UPDATE_ITEM', payload: { id: item.id, name: itemName } });
    onClose(); // Fechar o formulário após salvar
  };

  return (
    <div>
      <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      <button onClick={handleEditItem}>Salvar</button>
    </div>
  );
};

export default EditItemForm;
