import React, { Component, ChangeEvent } from "react";
import SubcategoryDataService from "../../../services/net/SubcategoryDataService";
import ISubcategoryData from '../../../services/types/subcategory.type';
import ICategoryData from '../../../services/types/category.type';
import CategoryDataService from "../../../services/net/CategoryDataService";

type Props = {
  onClose: () => void;
};

type State = ISubcategoryData & {
  submitted: boolean;
  categories: Array<ICategoryData>;
  selectedCategory: string;
};

export default class AddSubcategory extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.saveSubcategory = this.saveSubcategory.bind(this);
    this.newSubcategory = this.newSubcategory.bind(this);

    this.state = {
      id: null,
      name: "",
      description: "",
      category: "",
      submitted: false,
      categories: [],
      selectedCategory: ""
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

  saveSubcategory() {
    const data: ISubcategoryData = {
      name: this.state.name,
      description: this.state.description,
      category: this.state.selectedCategory
    };

    SubcategoryDataService.create(data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          description: response.data.description,
          category: response.data.category,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newSubcategory() {
    this.setState({
      id: null,
      name: "",
      description: "",
      category: "",
      submitted: false
    });
  }

  render() {
    const { submitted, name, description, categories, selectedCategory } = this.state;

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newSubcategory}>
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

            <button onClick={this.saveSubcategory} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
