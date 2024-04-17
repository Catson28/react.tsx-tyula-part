import React, { useState } from 'react';
import styled from 'styled-components';

const CarouuselContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 300px; /* Ajuste conforme necessário */
  object-fit: cover;
`;

const SlideTitle = styled.h2`
  color: #333;
`;

const SlideText = styled.p`
  color: #555;
`;

const SlideButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
`;

const Carouusel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: 'Slide 1', text: 'Lorem ipsum dolor sit amet.', image: 'http://localhost:8000/media/images/8515cd56b16ebe3b2f41af8091762ec3.JPEG' },
    { title: 'Slide 2', text: 'Consectetur adipiscing elit.', image: 'http://localhost:8000/media/images/277254782_5015332358560493_7370300353602031270_n_4hogsk4.jpg' },
    { title: 'Slide 3', text: 'Sed do eiusmod tempor incididunt ut labore.', image: 'http://localhost:8000/media/images/8515cd56b16ebe3b2f41af8091762ec3.JPEG' },
    { title: 'Slide 4', text: 'Ut enim ad minim veniam.', image: 'http://localhost:8000/media/images/1668952320921.JPEG' },
    { title: 'Slide 5', text: 'Quis nostrud exercitation ullamco.', image: 'http://localhost:8000/media/images/332490476_6243701845719046_700218137012171250_n_PyqohqP.JPEG' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <CarouuselContainer>
      {slides.map((slide, index) => (
        <Slide key={index} style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}>
          <SlideImage src={slide.image} alt={slide.title} />
          <SlideTitle>{slide.title}</SlideTitle>
          <SlideText>{slide.text}</SlideText>
          <SlideButton onClick={nextSlide}>Next</SlideButton>
          <SlideButton onClick={prevSlide}>Prev</SlideButton>
        </Slide>
      ))}
    </CarouuselContainer>
  );
};

export default Carouusel;
