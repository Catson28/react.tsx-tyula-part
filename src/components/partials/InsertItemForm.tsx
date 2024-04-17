// InsertItemForm.tsx

import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useCrud } from '../../services/context/CrudContext';

interface InsertItemFormProps {
  onAddItem: () => void; // Função para chamar ao adicionar um item
}

const InsertItemForm: React.FC<InsertItemFormProps> = ({ onAddItem }) => {
  const { dispatch } = useCrud();
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    const newItem = {
      id: uuidv4(),
      name: itemName,
    };
    dispatch({ type: 'CREATE_ITEM', payload: newItem });
    setItemName('');
    onAddItem(); // Chamar a função para indicar que um item foi adicionado
  };

  return (
    <div>
      <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      <button onClick={handleAddItem}>Adicionar Item</button>
    </div>
  );
};

export default InsertItemForm;
