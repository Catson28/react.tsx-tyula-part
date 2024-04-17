import React, { useState } from "react";
import styled from "styled-components";

import { CustomImageData } from '../../../services/types/image.type';

type Props = {
  cover: {
    ImageID: number;
    Path: string;
    object_id: number;
    content_type: number;
  } | null | undefined; // Permitindo que cover seja null ou undefined
  title: string;
  cost: string | undefined;
};

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); /* Ajustando a largura mínima do item para 220px */
  gap: 10px;
`;

const ProductCard = styled.div`
  position: relative;
  width: 100%;
  height: 220px; /* Ajustando a altura para 220px */
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const Title = styled.h3`
  font-size: 1.5em;
  margin-bottom: 5px;
  transition: font-size 0.3s ease;
`;

const Subtitle = styled.p`
  color: #ff9800; /* Cor de exemplo */
  transition: color 0.3s ease;
`;

const ProductImageCover: React.FC<Props> = ({ cover,title, cost }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GalleryContainer>
      {cover && (
        <ProductCard
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CardOverlay style={{ opacity: isHovered ? 1 : 0 }}>
            <Title style={{ fontSize: isHovered ? "2em" : "1.5em" }}>{title}</Title>
            <Subtitle>{cost}</Subtitle>
          </CardOverlay>
          <ProductImage src={`http://localhost:8000${cover.Path}`} alt={`cover Image`} />
        </ProductCard>
      )}
    </GalleryContainer>
  );
};

export default ProductImageCover;

// Declaração de export vazia para tratar o arquivo como um módulo
export {};
