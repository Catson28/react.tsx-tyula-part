import React from 'react';
import FormImgUploadCategory from "./FormImgUploadCategory";

interface Props {
  id: number; // Adicione a propriedade id ao tipo Props
};

const ImgUpdateCategory: React.FC<Props> = ({ id }) => {
  return (
    <div>
      <h1>Carregamento de Imagens</h1>
      <FormImgUploadCategory id={id}/>

    </div>
  );
};

export default ImgUpdateCategory;
