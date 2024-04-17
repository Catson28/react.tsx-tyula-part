import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Define keyframes for smooth transition
const expandAnimation = keyframes`
  from {
    width: 200px;
    height: 100px;
  }
  to {
    width: 500px;
    height: 400px;
  }
`;

const shrinkAnimation = keyframes`
  from {
    width: 500px;
    height: 400px;
  }
  to {
    width: 200px;
    height: 100px;
  }
`;

// Styled components
const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ChildComponent = styled.div<{ isVisible: boolean }>`
  width: 200px;
  height: 100px;
  padding: auto;
  background-color: lightblue;
  animation: ${({ isVisible }) => (isVisible ? expandAnimation : shrinkAnimation)} 0.5s ease-in-out forwards;
`;

const ParentWithDynamicChild: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const childRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (childRef.current) {
        const { top, bottom } = childRef.current.getBoundingClientRect();
        const isInViewport = top >= 0 && bottom <= window.innerHeight;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  return (
    <ParentContainer>
      <ChildComponent ref={childRef} isVisible={isVisible} />
    </ParentContainer>
  );
};

export default ParentWithDynamicChild;
/*

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ParentContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

interface ChildProps {
  size: number;
}

const Child = styled.div<ChildProps>`
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  background-color: blue;
  position: absolute;
  transition: all 0.3s ease; /* Animar transições de tamanho suavemente 
  `;

  const ParentWithDynamicChild = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [size, setSize] = useState(200); // Tamanho inicial do filho
  
    useEffect(() => {
      const handleScroll = () => {
        const currentPosition = window.scrollY;
        setScrollPosition(currentPosition);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      const childElement = document.getElementById('child');
      const parentElement = document.getElementById('parent');
  
      if (!childElement || !parentElement) return; // Verificar se os elementos existem
  
      const parentRect = parentElement.getBoundingClientRect();
      const childRect = childElement.getBoundingClientRect();
      const isChildVisible =
        childRect.top >= parentRect.top && childRect.bottom <= parentRect.bottom;
  
      setIsVisible(isChildVisible);
  
      if (isChildVisible) {
        // Calcular a proporção do tamanho com base na distância do centro
        const parentCenter = parentRect.height / 2;
        const childCenter = childRect.top + childRect.height / 2;
        const distanceFromCenter = Math.abs(parentCenter - childCenter);
        const maxSize = 200; // Tamanho máximo do filho
        const minSize = 50; // Tamanho mínimo do filho
        const scaleFactor = 1 - distanceFromCenter / parentCenter;
        const newSize = maxSize * scaleFactor;
  
        setSize(Math.max(minSize, newSize));
      } else {
        setSize(0); // Reduzir o tamanho do filho quando sai da tela
      }
    }, [scrollPosition]);
  
    return (
      <ParentContainer id="parent">
        <Child id="child" size={size} />
      </ParentContainer>
    );
  };
  
  export default ParentWithDynamicChild;
  
  
  
  // export default ParentWithDynamicChild;
  

*/