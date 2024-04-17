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

const Slide = styled.div`
  width: 100%;
  height: 300px; /* Ajuste conforme necessário */
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease-in-out;
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

const Carouausel: React.FC<CarouselProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Troca de slide a cada 5 segundos (5000 milissegundos)

    return () => clearInterval(interval);
  }, [slides]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          style={{
            transform: `translateX(${(index - currentSlide) * 100}%)`,
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <SlideTitle>{slide.title}</SlideTitle>
          <SlideText>{slide.text}</SlideText>
          <SlideButton onClick={nextSlide}>Next</SlideButton>
          <SlideButton onClick={prevSlide}>Prev</SlideButton>
        </Slide>
      ))}
    </CarouselContainer>
  );
};

export default Carouausel;
