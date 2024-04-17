import React, { Component, ChangeEvent } from "react";
import SubcategoryDataService from "../../../services/net/SubcategoryDataService";
import ISubcategoryData from '../../../services/types/subcategory.type';

type Props = {
  onClose: () => void;
  onAddSubcategoryClick: () => void;
  onEditSubcategory: (subcategory: ISubcategoryData) => void; // Adicionando propriedade para manipular a edição da subcategoria no pai
};

type State = {
  subcategories: Array<ISubcategoryData>,
  currentSubcategory: ISubcategoryData | null,
  currentIndex: number,
  searchName: string
};

export default class SubcategoriesList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveSubcategories = this.retrieveSubcategories.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveSubcategory = this.setActiveSubcategory.bind(this);
    this.removeAllSubcategories = this.removeAllSubcategories.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      subcategories: [],
      currentSubcategory: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveSubcategories();
  }

  onChangeSearchName(e: ChangeEvent<HTMLInputElement>) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveSubcategories() {
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

  refreshList() {
    this.retrieveSubcategories();
    this.setState({
      currentSubcategory: null,
      currentIndex: -1
    });
  }

  setActiveSubcategory(subcategory: ISubcategoryData, index: number) {
    this.setState({
      currentSubcategory: subcategory,
      currentIndex: index
    });
  }

  removeAllSubcategories() {
    SubcategoryDataService.deleteAll()
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
      currentSubcategory: null,
      currentIndex: -1
    });

    SubcategoryDataService.findByName(this.state.searchName)
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

  render() {
    const { searchName, subcategories, currentSubcategory, currentIndex } = this.state;

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
          <h4>Subcategories List</h4>

          <ul className="list-group">
            {subcategories &&
              subcategories.map((subcategory: ISubcategoryData, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveSubcategory(subcategory, index)}
                  key={index}
                >
                  {subcategory.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllSubcategories}
          >
            Remove All
          </button>

          <button
            className="m-3 btn btn-sm btn-primary"
            onClick={this.props.onAddSubcategoryClick}
          >
            Adicionar
          </button>
        </div>
        <div className="col-md-6">
          {currentSubcategory ? (
            <div>
              <h4>Subcategory</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentSubcategory.name}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentSubcategory.description}
              </div>
                  {/* Botão para editar a subcategoria */}
                  <button
                    className="btn btn-sm badge badge-warning btn-warning ml-2"
                    onClick={() => this.props.onEditSubcategory(currentSubcategory)}
                  >
                    Edit
                  </button>

            </div>
          ) : (
            <div>
              <br />
              <p>(Lista) --- Please click on a Subcategory...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
