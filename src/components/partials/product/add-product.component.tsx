import React, { Component, ChangeEvent } from "react";
import ProductDataService from "../../../services/net/ProductDataService";
import IProductData from '../../../services/types/product.type';
import ICategoryData from '../../../services/types/category.type';
import CategoryDataService from "../../../services/net/CategoryDataService";

type Props = {
  onClose: () => void;
};

type State = IProductData & {
  submitted: boolean;
  categories: Array<ICategoryData>;
  selectedCategory: string;
};

export default class AddProduct extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeCost = this.onChangeCost.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.saveProduct = this.saveProduct.bind(this);
    this.newProduct = this.newProduct.bind(this);

    this.state = {
      id: null,
      name: "",
      description: "",
      cost: "",
      quantity: "",
      cover: null,
      images: [],
      category: "", // Assuming category is a string here, adjust if it's supposed to be an object
      submitted: false,
      categories: [],
      selectedCategory: "",
    };
  }

  componentDidMount() {
    CategoryDataService.getAll()
      .then((response: any) => {
        this.setState({
          categories: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      }); 
  }

  onChangeName(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeCategory(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({
      selectedCategory: e.target.value
    });
  }

  onChangeCost(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      cost: e.target.value
    });
  }

  onChangeQuantity(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      quantity: e.target.value
    });
  }



  saveProduct() {
    const data: IProductData = {
      name: this.state.name,
      description: this.state.description,
      cost: this.state.cost,
      quantity: this.state.quantity,
      images: this.state.images,
      category: this.state.selectedCategory
    };

    ProductDataService.create(data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          cost: response.data.cost,
          quantity: response.data.quantity,
          category: response.data.category,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newProduct() {
    this.setState({
      id: null,
      name: "",
      description: "",
      cost: "",
      quantity: "",
      category: "", // Adjust if needed
      submitted: false
    });
  }

  render() {
    const { submitted, name, description, cost, quantity, categories, selectedCategory } = this.state;

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newProduct}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cost">Cost</label>
              <input
                type="text"
                className="form-control"
                id="cost"
                required
                value={cost}
                onChange={this.onChangeCost}
                name="cost"
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantity">Stock Quantity</label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                required
                value={quantity}
                onChange={this.onChangeQuantity}
                name="quantity"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                className="form-control"
                id="category"
                required
                value={selectedCategory}
                onChange={this.onChangeCategory}
                name="category"
              >
                <option value="">Select a category</option>
                {categories.map((category: ICategoryData, index: number) => (
                  <option key={index} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>

            <button onClick={this.saveProduct} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
