import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  /* Estilos do formulário */
`;

const Input = styled.input`
  /* Estilos do input */
`;

const Button = styled.button`
  /* Estilos do botão */
`;

const CrudForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar dados para a API
    setIsLoading(true);
    // Simulação de uma chamada assíncrona
    setTimeout(() => {
      if (isMounted) {
        setIsLoading(false);
        // Lógica de sucesso
      }
    }, 1000);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input type="text" placeholder="Nome" />
      <Input type="email" placeholder="Email" />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Enviar'}
      </Button>
    </FormContainer>
  );
};

export default CrudForm;
