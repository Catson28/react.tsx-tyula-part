import React, { Component, ChangeEvent } from "react";
import ProductDataService from "../../../services/net/ProductDataService";
import ProductImageGalleryComplex from "./ProductImageGalleryComplex"; 
import ProductImageCover from "./ProductImageCover"; 
import IProductData from '../../../services/types/product.type';
import styled from 'styled-components';

type Props = {
  onClose: () => void;
  onAddProductClick: () => void;
  onImgProduct: (product: IProductData) => void;
  onEditProduct: (product: IProductData) => void; // Adding property to handle product edit in the parent
};

type State = {
  products: Array<IProductData>,
  currentProduct: IProductData | null,
  currentIndex: number,
  searchName: string
};

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Para que os itens se ajustem automaticamente em uma nova linha quando não houver espaço suficiente */
`;

export default class ProductsList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProduct = this.setActiveProduct.bind(this);
    this.removeAllProducts = this.removeAllProducts.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      products: [],
      currentProduct: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveProducts();
  }

  onChangeSearchName(e: ChangeEvent<HTMLInputElement>) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveProducts() {
    ProductDataService.getAll()
      .then((response: any) => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveProducts();
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });
  }

  setActiveProduct(product: IProductData, index: number) {
    this.setState({
      currentProduct: product,
      currentIndex: index
    });
  }

  removeAllProducts() {
    ProductDataService.deleteAll()
      .then((response: any) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  searchName() {
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });

    ProductDataService.findByName(this.state.searchName)
      .then((response: any) => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { searchName, products, currentProduct, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Lista de Productos</h4>

          <ul className="list-group">
            {products &&
              products.map((product: IProductData, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveProduct(product, index)}
                  key={index}
                >
                  {product.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllProducts}
          >
            Remove All
          </button>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.props.onAddProductClick}
          >
            Adicionar
          </button>
        </div>
        <div className="col-md-6">
          {currentProduct ? (
            <div>
              <h4>Product</h4>


              <FlexContainer>
                <div className="col-md-6">
                <div>
                  <label>
                    <strong>Name:</strong>
                  </label>{" "}
                  {currentProduct.name}
                </div>
                <div>
                  <label>
                    <strong>Description:</strong>
                  </label>{" "}
                  {currentProduct.description}
                </div>
                </div>
                <div className="col-md-6">
                  <ProductImageCover cover={currentProduct.cover}  title={currentProduct.name}  cost={currentProduct.cost} />
                </div>
              </FlexContainer>


              <div>
                <label>
                  <strong>Images:</strong>
                </label>{" "}
                <ProductImageGalleryComplex images={currentProduct.images} />
              </div>

                  {/* Button to edit the product */}
                  <button
                    className="btn btn-sm badge badge-warning btn-warning ml-2"
                    onClick={() => this.props.onEditProduct(currentProduct)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-sm badge btn-primary ml-2"
                    onClick={() => this.props.onImgProduct(currentProduct)}
                  >
                    Upload Photo
                  </button>

            </div>
          ) : (
            <div>
              <br />
              <p>(List) --- Please click on a Product...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
