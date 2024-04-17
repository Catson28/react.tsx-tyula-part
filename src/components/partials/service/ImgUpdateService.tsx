import React from 'react';
import FormImgUploadService from "./FormImgUploadService";

interface Props {
  id: number; // Adicione a propriedade id ao tipo Props
};

const ImgUpdateService: React.FC<Props> = ({ id }) => {
  return (
    <div>
      <h1>Service Image Upload</h1>
      <FormImgUploadService id={id}/>
    </div>
  );
};

export default ImgUpdateService;
