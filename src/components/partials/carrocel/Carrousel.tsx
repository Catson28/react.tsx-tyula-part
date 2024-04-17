import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';

const slides = [
  {
    backgroundImage: 'url("http://localhost:8000/media/images/277254782_5015332358560493_7370300353602031270_n_4hogsk4.jpg")',
    title: 'Slide 1',
    text: 'Texto do Slide 1',
    buttonText: 'Botão 1',
    image: 'http://localhost:8000/media/images/Screenshot_from_2022-10-28_20-20-53.png'
  },
  {
    backgroundImage: 'url("http://localhost:8000/media/images/1668952320921.JPEG")',
    title: 'Slide 2',
    text: 'Texto do Slide 2',
    buttonText: 'Botão 2',
    image: 'http://localhost:8000/media/images/Screenshot_from_2022-10-28_20-20-53.png'
  },
  {
    backgroundImage: 'url("http://localhost:8000/media/images/8515cd56b16ebe3b2f41af8091762ec3.JPEG")',
    title: 'Slide 3',
    text: 'Texto do Slide 3',
    buttonText: 'Botão 3',
    image: 'http://localhost:8000/media/images/Screenshot_from_2022-10-28_20-20-53.png'
  }
];

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Slide = styled.div<{ backgroundImage: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-size: cover;
  background-position: center;
  animation: ${fadeIn} 1s ease-in-out forwards;

  &.fadeOut {
    animation: ${fadeOut} 1s ease-in-out forwards;
  }
`;

const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const Text = styled.p`
  font-size: 18px;
`;

const Button = styled.button`
  color: white;
  background-color: transparent;
  border: 2px solid white;
  padding: 10px 20px;
  cursor: pointer;
`;

const SlideImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000); // Intervalo de 10 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(`Início do slide ${currentSlide + 1}`);
    return () => console.log(`Fim do slide ${currentSlide + 1}`);
  }, [currentSlide]);

  return (
    <CarouselContainer>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          backgroundImage={slide.backgroundImage}
          className={index === currentSlide ? '' : 'fadeOut'}
        >
          <SlideContent>
            <Title>{slide.title}</Title>
            <Text>{slide.text}</Text>
            <Button>{slide.buttonText}</Button>
            <SlideImage src={slide.image} alt={slide.title} />
          </SlideContent>
        </Slide>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
