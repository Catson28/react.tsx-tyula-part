import React from "react";
import styled from "styled-components";
import { CustomImageData } from '../../../services/types/image.type'; // Importe o tipo de dados das imagens

type Props = {
  images: CustomImageData[]; // Array de objetos ImageData
};

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
`;

const ImageCard = styled.div`
  width: 100%;
  height: 120px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CategoryImageGalleryComplex: React.FC<Props> = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map((imageData, index) => (
        <ImageCard key={index}>
          <Image src={`http://localhost:8000${imageData.image.Path}`} alt={`Image ${index + 1}`} />
        </ImageCard>
      ))}
    </GalleryContainer>
  );
};

export default CategoryImageGalleryComplex;

// Declaração de export vazia para tratar o arquivo como um módulo
export {};
