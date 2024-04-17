// WordComponent.tsx
import React from 'react';
import { Word } from '../../../services/types/Word'; // Importando a interface Word

interface WordComponentProps {
  word: Word;
}

const WordComponent: React.FC<WordComponentProps> = ({ word }) => {
  return (
    <div>
      <p>Índice: {word.index}</p>
      <p>Palavra: {word.name}</p>
    </div>
  );
};

export default WordComponent;
