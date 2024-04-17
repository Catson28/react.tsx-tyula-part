// Palavras.tsx (ou o arquivo principal do seu aplicativo React)
import React from 'react';
import WordComponent from '../../partials/palavra/WordComponent'; // Importando o componente WordComponent
import { Word } from '../../../services/types/Word'; // Importando a interface Word
import ComponentSlider from '../../partials/carrocel/ComponentSlider';

/*
const Palavras: React.FC = () => {
  // Definindo o array de palavras
  const words: Word[] = [
    { index: 0, name: "banana" },
    { index: 1, name: "maçã" },
    { index: 2, name: "laranja" }
  ];

  // Criando o array de componentes WordComponent
  const wordComponents = words.map((word) => (
    <WordComponent key={word.index} word={word} />
  ));

  return (
    <div>
      {wordComponents}
    </div>
  );
};

export default Palavras;
*/
const Palavras: React.FC = () => {
  const words: Word[] = [
    { index: 0, name: "banana" },
    { index: 1, name: "maçã" },
    { index: 2, name: "laranja" },
    { index: 3, name: "mamao" },
    { index: 4, name: "abacaxi" },
    { index: 5, name: "pitanga" },
    { index: 6, name: "Goiaba" }
  ];

  const wordComponents: JSX.Element[] = [];

  words.forEach((word) => {
    wordComponents.push(<WordComponent key={word.index} word={word} />);
    <WordComponent key={word.index} word={word} />
  });

  return (
    <div>
      <h1>Palavras</h1>
      {/*wordComponents*/}
          <ComponentSlider components={wordComponents} />
    </div>
  );
};

export default Palavras;