import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom';
import SubcategoryDataService from "../../../services/net/SubcategoryDataService";
import CategoryDataService from "../../../services/net/CategoryDataService";
import ISubcategoryData from "../../../services/types/subcategory.type";
import ICategoryData from "../../../services/types/category.type";

interface Props {
  id: string;
  onEdit: (updatedSubcategory: ISubcategoryData) => void;
  onDelete: (subcategoryId: string) => void;
};

const Subcategory: React.FC<Props> = ({ id, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const [currentSubcategory, setCurrentSubcategory] = useState<ISubcategoryData>({
    id: "",
    name: "",
    description: "",
    category: "",
  });
  const [categories, setCategories] = useState<ICategoryData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (id) {
      getSubcategory(id);
      fetchCategories();
    }
  }, [id]);

  const fetchCategories = () => {
    CategoryDataService.getAll()
      .then((response: any) => {
        setCategories(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const getSubcategory = (id: string) => {
    SubcategoryDataService.get(id)
      .then((response: any) => {
        setCurrentSubcategory(response.data);
        setSelectedCategory(response.data.category);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setCurrentSubcategory(prevState => ({
      ...prevState,
      name: name,
    }));
  };

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const description = e.target.value;
    setCurrentSubcategory(prevState => ({
      ...prevState,
      description: description,
    }));
  };

  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const updateSubcategory = () => {
    const updatedSubcategory: ISubcategoryData = {
      ...currentSubcategory,
      category: selectedCategory,
    };

    SubcategoryDataService.update(updatedSubcategory, currentSubcategory.id)
      .then((response: any) => {
        setMessage("The subcategory was updated successfully!");
        onEdit(updatedSubcategory);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const deleteSubcategory = () => {
    SubcategoryDataService.delete(currentSubcategory.id)
      .then((response: any) => {
        setMessage("The subcategory was deleted successfully!");
        onDelete(currentSubcategory.id);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  
  return (
    <div>
      {id && currentSubcategory ? (
        <div className="edit-form">
          <h4>Subcategory</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={currentSubcategory.name}
                onChange={onChangeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={currentSubcategory.description}
                onChange={onChangeDescription}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                className="form-control"
                id="category"
                value={selectedCategory}
                onChange={onChangeCategory}
              >
                <option value="">Select a category</option>
                {categories.map((category: ICategoryData) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
          </form>
          <button
            className="badge badge-danger mr-2"
            onClick={deleteSubcategory}
          >
            Delete
          </button>
          <button
            type="button"
            className="badge badge-success"
            onClick={updateSubcategory}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>({JSON.stringify(currentSubcategory)}) --- Please click on a Subcategory...</p>
        </div>
      )}
    </div>
  );
};

export default Subcategory;
