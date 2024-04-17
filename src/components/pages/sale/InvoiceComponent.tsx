import React from 'react';
import styled from 'styled-components';

// Definindo as propriedades do componente
interface InvoiceProps {
  total: number;
  change: number;
  onButtonClick: () => void;
}

// Estilizando o componente
const InvoiceContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  height: 100%;
`;


const InvoiceAlign = styled.div`
    float: right;
`;


const TotalLabel = styled.p`
  font-size: 16px;
`;

const ChangeLabel = styled.p`
  font-size: 16px;
`;

const CustomButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }

  &:active {
    background-color: #3e8e41;
  }
`;

const InvoiceComponent: React.FC<InvoiceProps> = ({ total, change, onButtonClick }) => {
  return (
    <InvoiceContainer>
        <InvoiceAlign>
            <ChangeLabel>Troco: {change.toFixed(2)}</ChangeLabel>
            <TotalLabel>Total: {total.toFixed(2)}</TotalLabel>
        </InvoiceAlign>
        <CustomButton onClick={onButtonClick}>Confirmar Pagamento</CustomButton>
    </InvoiceContainer>

  );
};

export default InvoiceComponent;
