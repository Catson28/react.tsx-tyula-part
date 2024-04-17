#	cadastrar

####	formulario que traz uma id ou pai dos componentes e apresenta um select no formulario para escolher a opcao de cadastro





**AddProductService.tsx**

```tsx
import React, { Component, ChangeEvent } from "react";
import ServiceDataService from "../../../services/net/ServiceDataService";
import IProductData from '../../../services/types/product.type';
import ProductDataService from "../../../services/net/ProductDataService";

interface Props {
  id: number; // Adicione a propriedade id ao tipo Props
}

type State = {
  id: number;
  product: string;
  products: IProductData[]; // Corrija o nome da propriedade para products
  selectedProduct: string;
  submitted: boolean;
};

export default class AddService extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: 0,
      product: "",
      products: [], // Corrija o nome da propriedade para products
      selectedProduct: "",
      submitted: false,
    };
  }

  componentDidMount() {
    ProductDataService.getAll()
      .then((response: any) => {
        this.setState({
          products: response.data // Corrija o nome da propriedade para products
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  onChangeProduct = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectedProduct: e.target.value
    });
  };

  saveProductService = () => {
    const data = { // Remova a tipagem explícita aqui para evitar erros de tipo
      id: null, // Adicione o id como null para a criação de um novo serviço
      product: this.state.selectedProduct,
    };
  
    ServiceDataService.addProduct(this.props.id, data) // Corrija a chamada da função addProduct
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          product: response.data.product,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  newProductService = () => {
    this.setState({
      id: 0,
      product: "",
      submitted: false
    });
  };

  render() {
    const { submitted, products, selectedProduct } = this.state; // Corrija o nome da propriedade para products

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newProductService}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="product">Product</label>
              <select
                className="form-control"
                id="product"
                required
                value={selectedProduct}
                onChange={this.onChangeProduct}
                name="product"
              >
                <option value="">Select a product</option>
                {products.map((product: IProductData, index: number) => ( // Corrija o nome da propriedade para products
                  <option key={index} value={product.id}>{product.name}</option>
                ))}
              </select>
            </div>

            <button onClick={this.saveProductService} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

```



Para adicionar os campos `consume`, `unit`, `business`, `liquid`, `margin` e `measurable` ao seu componente `AddService`, você pode seguir os passos abaixo:

1. Adicione os estados para os novos campos no tipo `State`:

```typescript
type State = {
  id: number;
  product: string;
  products: IProductData[];
  selectedProduct: string;
  submitted: boolean;
  consume: number;
  unit: string;
  business: number;
  liquid: number;
  margin: number;
  measurable: boolean;
};
```

2. No construtor, inicialize os novos estados com valores padrão:

```typescript
constructor(props: Props) {
  super(props);
  this.state = {
    id: 0,
    product: "",
    products: [],
    selectedProduct: "",
    submitted: false,
    consume: 0,
    unit: "",
    business: 0,
    liquid: 0,
    margin: 0,
    measurable: false,
  };
}
```

3. Atualize o método `saveProductService` para incluir os novos campos no objeto `data`:

```typescript
saveProductService = () => {
  const data = {
    id: null,
    product: this.state.selectedProduct,
    consume: this.state.consume,
    unit: this.state.unit,
    business: this.state.business,
    liquid: this.state.liquid,
    margin: this.state.margin,
    measurable: this.state.measurable,
  };
  
  ServiceDataService.addProduct(this.props.id, data)
    .then((response: any) => {
      this.setState({
        id: response.data.id,
        product: response.data.product,
        submitted: true
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
};
```

4. Atualize o retorno do método `render` para incluir os inputs correspondentes aos novos campos:

```typescript
render() {
  const { submitted, products, selectedProduct, consume, unit, business, liquid, margin, measurable } = this.state;

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={this.newProductService}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="product">Product</label>
            <select
              className="form-control"
              id="product"
              required
              value={selectedProduct}
              onChange={this.onChangeProduct}
              name="product"
            >
              <option value="">Select a product</option>
              {products.map((product: IProductData, index: number) => (
                <option key={index} value={product.id}>{product.name}</option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="consume">Consume</label>
            <input
              type="number"
              className="form-control"
              id="consume"
              value={consume}
              onChange={(e) => this.setState({ consume: +e.target.value })}
              name="consume"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="unit">Unit</label>
            <input
              type="text"
              className="form-control"
              id="unit"
              value={unit}
              onChange={(e) => this.setState({ unit: e.target.value })}
              name="unit"
            />
          </div>
          
          {/* Repeat the above pattern for other fields: business, liquid, margin, measurable */}
          
          <button onClick={this.saveProductService} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
```

Certifique-se de substituir os comentários `"/* Repeat the above pattern for other fields: business, liquid, margin, measurable */"` com os inputs correspondentes para os campos restantes: `business`, `liquid`, `margin` e `measurable`.

Essas alterações adicionam os novos campos e inputs ao seu componente `AddService`. Certifique-se de ajustar os estilos e validações conforme necessário para aprimorar a experiência do usuário.







#	Para analize financeira

**AddProductService.tsx** por causa dos campos

**'business'**
**'liquid'**
**'margin'**

```tsx
import React, { Component, ChangeEvent } from "react";
import ServiceDataService from "../../../services/net/ServiceDataService";
import IProductData from '../../../services/types/product.type';
import ProductDataService from "../../../services/net/ProductDataService";
import styled from "styled-components";

interface Props {
  id: number; // Adicione a propriedade id ao tipo Props
}

type State = {
  id: number;
  product: string;
  products: IProductData[];
  selectedProduct: string;
  submitted: boolean;

  consume: number;
  unit: string;
  business: number;
  liquid: number;
  margin: number;
  measurable: boolean;
};

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  margin-right: 8px;
`;

const CheckboxInput = styled.input`
  margin-right: 4px;
`;

export default class AddService extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      id: 0,
      product: "",
      products: [],
      selectedProduct: "",
      submitted: false,

      consume: 0,
      unit: "",
      business: 0,
      liquid: 0,
      margin: 0,
      measurable: false,
    };
  }
  
  componentDidMount() {
    ProductDataService.getAll()
      .then((response: any) => {
        this.setState({
          products: response.data // Corrija o nome da propriedade para products
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  onChangeProduct = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectedProduct: e.target.value
    });
  };

  saveProductService = () => {
    const data = {
      id: null,
      product: this.state.selectedProduct,

      consume: this.state.consume,
      unit: this.state.unit,
      business: this.state.business,
      liquid: this.state.liquid,
      margin: this.state.margin,
      measurable: this.state.measurable,
    };
    
    ServiceDataService.addProduct(this.props.id, data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          product: response.data.product,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  

  newProductService = () => {
    this.setState({
      id: 0,
      product: "",
      submitted: false
    });
  };

  render() {
    const { submitted, products, selectedProduct, consume, unit, business, liquid, margin, measurable } = this.state;
    
    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newProductService}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <FormField>
              <Label htmlFor="product">Product</Label>
              <Select
                id="product"
                required
                value={selectedProduct}
                onChange={this.onChangeProduct}
                name="product"
              >
                <option value="">Select a product</option>
                {products.map((product: IProductData, index: number) => (
                  <option key={index} value={product.id}>{product.name}</option>
                ))}
              </Select>
            </FormField>
            
            <FormField>
              <Label htmlFor="business">Preco Negociando / "O que o cliente pode pagar"</Label>
              <Input
                type="number"
                id="business"
                value={business}
                onChange={(e) => this.setState({ business: +e.target.value })}
                name="business"
              />
            </FormField>
            
            <FormField>
              <Label htmlFor="liquid">Lucro liquido</Label>
              <Input
                type="number"
                id="liquid"
                value={liquid}
                onChange={(e) => this.setState({ liquid: +e.target.value })}
                name="liquid"
              />
            </FormField>
            
            <FormField>
              <Label htmlFor="margin">Margem de Lucro</Label>
              <Input
                type="number"
                id="margin"
                value={margin}
                onChange={(e) => this.setState({ margin: +e.target.value })}
                name="margin"
              />
            </FormField>
            
            <FormField>
              <Label htmlFor="consume">Consumo / Unidade de Producao</Label>
              <Input
                type="number"
                id="consume"
                value={consume}
                onChange={(e) => this.setState({ consume: +e.target.value })}
                name="consume"
              />
            </FormField>

            <CheckboxContainer>
              <CheckboxLabel htmlFor="measurable">Podemos medir (contar) este produto?</CheckboxLabel>
              <CheckboxInput
                type="checkbox"
                id="measurable"
                checked={measurable}
                onChange={(e) => this.setState({ measurable: e.target.checked })}
                name="measurable"
              /> Se nao preecha o numero de vezes que pode usar o produto como unidade de consumo
            </CheckboxContainer>
            
            <button onClick={this.saveProductService} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

```



#	Previsualizacao de imagem



```tsx
import React from "react";
import styled from "styled-components";

import { CustomImageData } from '../../../services/types/image.type';

type Props = {
    images: CustomImageData[]; // Array de objetos ServiceData
};

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
`;

const ServiceCard = styled.div`
  width: 100%;
  height: 120px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.2); // Aumenta o tamanho da imagem em 20% ao passar o mouse
  }
`;

const ServiceImageGalleryComplex: React.FC<Props> = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map((serviceData, index) => (
        <ServiceCard key={index}>
          <ServiceImage src={`http://localhost:8000${serviceData.image.Path}`} alt={`Service Image ${index + 1}`} />
        </ServiceCard>
      ))}
    </GalleryContainer>
  );
};

export default ServiceImageGalleryComplex;

// Declaração de export vazia para tratar o arquivo como um módulo
export {};

```



