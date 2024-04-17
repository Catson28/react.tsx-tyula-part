import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface SlideProps {
  title: string;
  text: string;
  image: string;
}

interface CarouselProps {
  slides: SlideProps[];
}

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const Slide = styled.div<{ active: boolean }>`
  width: 100%;
  height: auto;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const SlideTitle = styled.h2`
  color: #fff;
`;

const SlideText = styled.p`
  color: #fff;
`;

const SlideButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

const Caroulusel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Troca de slide a cada 5 segundos (5000 milissegundos)

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          active={index === currentSlide}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <SlideTitle>{slide.title}</SlideTitle>
          <SlideText>{slide.text}</SlideText>
        </Slide>
      ))}
    </CarouselContainer>
  );
};

export default Caroulusel;
