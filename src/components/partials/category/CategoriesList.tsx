import React, { Component, ChangeEvent } from "react";
import CategoryDataService from "../../../services/net/CategoryDataService";
import ICategoryData from '../../../services/types/category.type';
import CategoryImageGalleryComplex from "./CategoryImageGalleryComplex"; // Importe o novo componente

type Props = {
  onClose: () => void;
  onCategoriesListClick: () => void;
  onImgCategory: (category: ICategoryData) => void;
  onEditCategory: (category: ICategoryData) => void; // Adicionando propriedade para manipular a edição da categoria no pai
};

type State = {
  categories: Array<ICategoryData>,
  currentCategory: ICategoryData | null,
  currentIndex: number,
  searchName: string
};

export default class CategoriesList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveCategories = this.retrieveCategories.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCategory = this.setActiveCategory.bind(this);
    this.removeAllCategories = this.removeAllCategories.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      categories: [],
      currentCategory: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveCategories();
  }

  onChangeSearchName(e: ChangeEvent<HTMLInputElement>) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveCategories() {
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

  refreshList() {
    this.retrieveCategories();
    this.setState({
      currentCategory: null,
      currentIndex: -1
    });
  }

  setActiveCategory(category: ICategoryData, index: number) {
    this.setState({
      currentCategory: category,
      currentIndex: index
    });
  }

  removeAllCategories() {
    CategoryDataService.deleteAll()
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
      currentCategory: null,
      currentIndex: -1
    });

    CategoryDataService.findByName(this.state.searchName)
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

  render() {
    const { searchName, categories, currentCategory, currentIndex } = this.state;

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
          <h4>Categories List</h4>

          <ul className="list-group">
            {categories &&
              categories.map((category: ICategoryData, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveCategory(category, index)}
                  key={index}
                >
                  {category.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllCategories}
          >
            Remove All
          </button>

          <button
            className="m-3 btn btn-sm btn-primary"
            onClick={this.props.onCategoriesListClick}
          >
            Adicionar
          </button>
        </div>
        <div className="col-md-6">
          {currentCategory ? (
            <div>
              <h4>Category</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentCategory.name}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentCategory.description}
              </div>
              {/* Nova seção para a galeria de imagens complexa */}
              <div>
                <label>
                  <strong>Images:</strong>
                </label>{" "}
                <CategoryImageGalleryComplex images={currentCategory.images} />
              </div>
              <button
                className="btn btn-sm badge badge-warning btn-warning ml-2"
                onClick={() => this.props.onEditCategory(currentCategory)}
              >
                Edit
              </button>

              <button
                  className="btn btn-sm badge btn-primary ml-2"
                  onClick={() => this.props.onImgCategory(currentCategory)}
                >
                  Upload Photo
                </button>
            </div>
          ) : (
            <div>
              <br />
              <p>(Lista) --- Please click on a Category...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
