import React, { useState } from 'react';
import ReusableButton from '../../../services/utils/styled-components/ReusableButton';

type ComponentSliderProps = {
  components: JSX.Element[];
};

const ComponentSlider: React.FC<ComponentSliderProps> = ({ components }) => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const goToNextComponent = () => {
    setCurrentComponentIndex((prevIndex) =>
      prevIndex === components.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  const goToPrevComponent = () => {
    setCurrentComponentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  return (
    <div>
      {components[currentComponentIndex]}
      {currentComponentIndex !== 0 && (
        <ReusableButton as="button" onClick={goToPrevComponent} >Anterior</ReusableButton>
      )}
      {currentComponentIndex !== components.length - 1 && (
        <ReusableButton onClick={goToNextComponent} >Próximo</ReusableButton>
      )}
    </div>
  );
};

export default ComponentSlider;
