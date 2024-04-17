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
  status: string;
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
      status: "",
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
      status: this.state.status,
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
    const { submitted, products, selectedProduct, consume, unit, status, measurable } = this.state;
    
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
              <Label htmlFor="status">Estadodo produto / "Aberto, em uso, etc."</Label>
              <Input
                type="text"
                id="status"
                value={status}
                onChange={(e) => this.setState({ status: e.target.value })}
                name="status"
              />
            </FormField>
            
            <FormField>
              <Label htmlFor="unit">Numero de servicos</Label>
              <Input
                type="number"
                id="unit"
                value={unit}
                onChange={(e) => this.setState({ unit: e.target.value })}
                name="unit"
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
