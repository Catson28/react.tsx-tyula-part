import React from 'react';
import styled from 'styled-components';

interface TelaComponentProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  points: string[];
}

const TelaComponent: React.FC<TelaComponentProps> = ({ title, subtitle, imageUrl, points }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Image src={imageUrl} alt="Imagem" />
      <PointsList>
        {points.map((point, index) => (
          <Point key={index}>{point}</Point>
        ))}
      </PointsList>
    </Container>
  );
};

const Container = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const PointsList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const Point = styled.li`
  font-size: 16px;
  margin-bottom: 5px;
`;

export default TelaComponent;
