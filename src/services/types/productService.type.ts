// types/productService.type.ts
import IProductData from './product.type';

interface IProductService {
  id: number;
  // service: number; // ID do serviço proveniente do componente pai
  product: string; // ID do produto selecionado
  // consume: number; // Quantidade consumida
  // unit: string; // Unidade da moeda
  // business: string; // Valor comercial da moeda
  // liquid: string; // Valor líquido da moeda
  // margin: string; // Margem da moeda
  // measurable: boolean; // Indicador se é mensurável ou não
}

export default IProductService;

