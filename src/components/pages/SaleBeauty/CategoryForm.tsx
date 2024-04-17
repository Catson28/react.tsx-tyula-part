import React, { useState } from 'react';
import axios from 'axios';

interface CategoryFormProps {
  onSubmit: () => void;
  onCancel: () => void; // Adicionando a propriedade onCancel
}

const CategoryForm: React.FC<CategoryFormProps> = ({ onSubmit, onCancel }) => {
  const [categoryName, setCategoryName] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Faça a solicitação HTTP para cadastrar a categoria
      await axios.post('/api/categories', { name: categoryName });
      setCategoryName('');
      onSubmit(); // Chame a função de retorno de envio
    } catch (error) {
      console.error('Erro ao cadastrar categoria:', error);
    }
  };

  const handleCancel = () => {
    setCategoryName(''); // Limpar o estado do nome da categoria
    onCancel(); // Chame a função de retorno de cancelamento
  };

  return (
    <div className="container">
      <h2>Cadastrar Categoria</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="categoryName">Nome da Categoria:</label>
          <input
            type="text"
            className="form-control"
            id="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mr-2">Cadastrar</button>
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancelar</button>
      </form>
    </div>
  );
};

export default CategoryForm;
