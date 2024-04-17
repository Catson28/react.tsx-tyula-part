import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom';
import ProductDataService from "../../../services/net/ProductDataService";
import CategoryDataService from "../../../services/net/CategoryDataService";
import IProductData from "../../../services/types/product.type";
import ICategoryData from "../../../services/types/category.type";

interface Props {
  id: string;
  onEdit: (updatedProduct: IProductData) => void;
  onDelete: (productId: string) => void;
}

const Product: React.FC<Props> = ({ id, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState<IProductData>({
    id: "",
    name: "",
    description: "",
    cost: "",
    quantity: "",
    category: "",
    images: [],
    cover: null, // Use null em vez de uma string vazia para cover
  });
  const [categories, setCategories] = useState<ICategoryData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (id) {
      getProduct(id);
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

  const getProduct = (id: string) => {
    ProductDataService.get(id)
      .then((response: any) => {
        setCurrentProduct(response.data);
        setSelectedCategory(response.data.category);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setCurrentProduct(prevState => ({
      ...prevState,
      name: name,
    }));
  };

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const description = e.target.value;
    setCurrentProduct(prevState => ({
      ...prevState,
      description: description,
    }));
  };

  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const updateProduct = () => {
    const updatedProduct: IProductData = {
      ...currentProduct,
      category: selectedCategory,
    };

    ProductDataService.update(updatedProduct, currentProduct.id)
      .then((response: any) => {
        setMessage("The product was updated successfully!");
        onEdit(updatedProduct);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const deleteProduct = () => {
    ProductDataService.delete(currentProduct.id)
      .then((response: any) => {
        setMessage("The product was deleted successfully!");
        onDelete(currentProduct.id);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  
  return (
    <div>
      {id && currentProduct ? (
        <div className="edit-form">
          <h4>Product</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={currentProduct.name}
                onChange={onChangeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={currentProduct.description}
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
            onClick={deleteProduct}
          >
            Delete
          </button>
          <button
            type="button"
            className="badge badge-success"
            onClick={updateProduct}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>({JSON.stringify(currentProduct)}) --- Please click on a Product...</p>
        </div>
      )}
    </div>
  );
};

export default Product;
