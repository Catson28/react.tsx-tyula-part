import React from 'react';
import FormImgUploadProduct from "./FormImgUploadProduct";

interface Props {
  id: number; // Adicione a propriedade id ao tipo Props
};

const ImgUpdateProduct: React.FC<Props> = ({ id }) => {
  return (
    <div>
      <h1>Product Image Upload</h1>
      <FormImgUploadProduct id={id}/>
    </div>
  );
};

export default ImgUpdateProduct;
