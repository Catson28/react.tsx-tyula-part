// types/category.type.ts
import { CustomImageData } from './image.type'; 

type ICategoryData = {
  id: number;
  name: string;
  description: string;
  images: CustomImageData[]; // Adicione a propriedade images ao tipo ICategoryData
};

export default ICategoryData;
