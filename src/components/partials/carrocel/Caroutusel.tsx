import React from 'react';
import styled from 'styled-components';

interface CarouselSlideProps {
  title: string;
  text: string;
  buttonText: string;
  imageUrl: string;
}

const SlideContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #ffffff;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #ffffff;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #333333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Caroutusel: React.FC<CarouselSlideProps> = ({
  title,
  text,
  buttonText,
  imageUrl,
}) => {
  return (
    <SlideContainer>
      <BackgroundImage src={imageUrl} alt="Slide background" />
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Button>{buttonText}</Button>
    </SlideContainer>
  );
};

export default Caroutusel;
