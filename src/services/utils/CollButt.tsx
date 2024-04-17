import React, { useState } from 'react';
import styled from 'styled-components';

interface CollapsibleContentProps {
  isOpen: boolean;
}

const CollapsibleButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const Footery = styled.div`
width:100%;
background-color: #3498db;
height:20vh;
`

const CollapsibleContent = styled.div<CollapsibleContentProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const CollButt = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInput, setSelectedInput] = useState<string | null>(null);

  const handleCollapsibleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleInputSelect = (input: string) => {
    setSelectedInput(input);
  };

  return (
    <div>
      <CollapsibleButton onClick={handleCollapsibleClick}>Botão Colapsável</CollapsibleButton>
      <CollapsibleContent isOpen={isOpen}>
        <button onClick={() => console.log('1')}>1</button>
        <button onClick={() => console.log('2')}>2</button>
        <button onClick={() => console.log('3')}>3</button>
        {/* Adicione mais botões conforme necessário */}
      </CollapsibleContent>
      <input
        type="text"
        value={selectedInput === 'input1' ? 'Input 1 selecionado' : ''}
        onClick={() => handleInputSelect('input1')}
      />
      <input
        type="text"
        value={selectedInput === 'input2' ? 'Input 2 selecionado' : ''}
        onClick={() => handleInputSelect('input2')}
      />
      <input
        type="text"
        value={selectedInput === 'input3' ? 'Input 3 selecionado' : ''}
        onClick={() => handleInputSelect('input3')}
      />
      <Footery/>
    </div>
  );
};

export default CollButt;
