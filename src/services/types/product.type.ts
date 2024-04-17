// types/product.type.ts
import { CustomImageData } from './image.type';

type IProductData = {
    id?: any | null;
    name: string;
    description: string;
    cost: string;
    quantity: string;
    category: string;
    cover?: {
      ImageID: number;
      Path: string;
      object_id: number;
      content_type: number;
    } | null;
    images: CustomImageData[]; // Adicione a propriedade images ao tipo ICategoryData
  }
  

export default IProductData;