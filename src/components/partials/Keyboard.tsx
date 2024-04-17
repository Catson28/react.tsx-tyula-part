import React, { useState } from 'react';
import styled from 'styled-components';

interface KeyboardProps {
  className?: string;
}

const KeyboardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 5px;
  padding: 10px;
  background-color: #f0f0f0;
`;

const KeyButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Keyboard: React.FC<KeyboardProps> = ({ className }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = (key: string) => {
    setInputValue((prevValue) => prevValue + key);
  };

  const keyboardLayout = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', 'Clear',
  ];

  return (
    <KeyboardWrapper className={className}>
      {keyboardLayout.map((key) => (
        <KeyButton key={key} onClick={() => handleKeyPress(key)}>
          {key}
        </KeyButton>
      ))}
    </KeyboardWrapper>
  );
};

export default Keyboard;
