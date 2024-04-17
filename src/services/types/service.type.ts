import { CustomImageData } from './image.type';
import IProductData from './product.type';
import Decimal from 'decimal.js'; // Importe o tipo Decimal

type IServiceData = {
  id: number;
  name: string;
  description: string;
  price?: string; // Campo price opcional
  hourly_rate?: Decimal | null; // Adicione o campo hourly_rate opcional
  subcategory: number | string;
  cover?: {
    ImageID: number;
    Path: string;
    object_id: number;
    content_type: number;
  } | null;
  images: CustomImageData[];
  products: IProductData[];
};

export default IServiceData;
