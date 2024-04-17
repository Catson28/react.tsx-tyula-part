import React, { Component, ChangeEvent } from "react";
import ServiceDataService from "../../../services/net/ServiceDataService";
import IServiceData from '../../../services/types/service.type';
import ICategoryData from '../../../services/types/category.type';
import CategoryDataService from "../../../services/net/CategoryDataService";
import ISubcategoryData from '../../../services/types/subcategory.type';
import SubcategoryDataService from "../../../services/net/SubcategoryDataService";
import Decimal from 'decimal.js'; // Importe o tipo Decimal

type Props = {
  onClose: () => void;
};

type State = {
  id: number;
  name: string;
  description: string;
  price: string | undefined;
  category: string;
  subcategory: string;
  cover: string;
  products: any[]; // Adjust the type if needed
  images: any[]; // Adjust the type if needed
  categories: ICategoryData[];
  selectedCategory: string;
  subcategories: ISubcategoryData[];
  selectedSubcategory: string;
  hourlyRate: Decimal | null | undefined; // Adjust the type for hourly rate
  submitted: boolean;
};

export default class AddService extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      id: 0,
      name: "",
      description: "",
      price: undefined,
      category: "",
      subcategory: "",
      cover: '',
      products: [],
      images: [],
      categories: [],
      selectedCategory: "",
      subcategories: [],
      selectedSubcategory: "",
      hourlyRate: undefined, // Initialize hourly rate state
      submitted: false,
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

    SubcategoryDataService.getAll()
      .then((response: any) => {
        this.setState({
          subcategories: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value
    });
  };

  onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      description: e.target.value
    });
  };

  onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectedCategory: e.target.value
    });
  };

  onChangeSubcategory = (e: ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      selectedSubcategory: e.target.value
    });
  };



  onChangeHourlyRate = (e: ChangeEvent<HTMLInputElement>) => {
    // Parse the input value to Decimal
    const value = e.target.value ? new Decimal(e.target.value) : null;
    this.setState({
      hourlyRate: value
    });
  };

  saveService = () => {
    const data: IServiceData = {
      id: this.state.id, // Adicione o id como null para a criação de um novo serviço
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      hourly_rate: this.state.hourlyRate, // Include hourly rate in data object
      subcategory: this.state.selectedSubcategory,
      images: this.state.images,
      products: [], // Adicione uma array vazia para products
    };
  
    ServiceDataService.create(data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          price: response.data.price,
          category: response.data.category,
          subcategory: response.data.subcategory,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  newService = () => {
    this.setState({
      id: 0,
      name: "",
      description: "",
      price: undefined,
      category: "",
      subcategory: "",
      cover: '',
      products: [],
      images: [],
      submitted: false
    });
  };

  render() {
    const { submitted, name, description, price, subcategories, selectedSubcategory, hourlyRate } = this.state;

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newService}>
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
              <label htmlFor="price">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                required
                value={price || ''}
                onChange={(e) => this.setState({ price: e.target.value })}
                name="price"
              />
            </div>

            <div className="form-group">
              <label htmlFor="hourlyRate">Hourly Rate</label>
              <input
                type="number"
                className="form-control"
                id="hourlyRate"
                required
                value={hourlyRate ? hourlyRate.toString() : ''}
                onChange={this.onChangeHourlyRate}
                name="hourlyRate"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subcategory">Subcategory</label>
              <select
                className="form-control"
                id="subcategory"
                required
                value={selectedSubcategory}
                onChange={this.onChangeSubcategory}
                name="subcategory"
              >
                <option value="">Select a subcategory</option>
                {subcategories.map((subcategory: ISubcategoryData, index: number) => (
                  <option key={index} value={subcategory.id}>{subcategory.name}</option>
                ))}
              </select>
            </div>

            <button onClick={this.saveService} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
