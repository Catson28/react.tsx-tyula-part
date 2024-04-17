import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from 'react-router-dom';
import ServiceDataService from "../../../services/net/ServiceDataService";
import CategoryDataService from "../../../services/net/CategoryDataService";
import IServiceData from "../../../services/types/service.type";
import ICategoryData from "../../../services/types/category.type";

interface Props {
  id: string;
  onEdit: (updatedService: IServiceData) => void;
  onDelete: (serviceId: string) => void;
}

const EditService: React.FC<Props> = ({ id, onEdit, onDelete }) => {
  const navigate = useNavigate();
  const [currentService, setCurrentService] = useState<IServiceData>({
    id: 0, // Use null em vez de uma string vazia para id
    name: "",
    description: "",
    price: undefined,
    subcategory: "",
    images: [],
    products: [],
    cover: null, // Use null em vez de uma string vazia para cover
  });
  const [categories, setCategories] = useState<ICategoryData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (id) {
      getService(id);
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

  const getService = (id: string) => {
    ServiceDataService.get(id)
      .then((response: any) => {
        setCurrentService(response.data);
        setSelectedCategory(response.data.category);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    setCurrentService(prevState => ({
      ...prevState,
      name: name,
    }));
  };

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const description = e.target.value;
    setCurrentService(prevState => ({
      ...prevState,
      description: description,
    }));
  };

  const onChangeCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const updateService = () => {
    const updatedService: IServiceData = {
      ...currentService,
    };

    ServiceDataService.update(updatedService, currentService.id)
      .then((response: any) => {
        setMessage("The service was updated successfully!");
        onEdit(updatedService);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const deleteService = () => {
    ServiceDataService.delete(currentService.id.toString()) // Converta id para string
      .then((response: any) => {
        setMessage("The service was deleted successfully!");
        onDelete(currentService.id.toString()); // Converta id para string
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  
  return (
    <div>
      {id && currentService ? (
        <div className="edit-form">
          <h4>Service</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={currentService.name}
                onChange={onChangeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={currentService.description}
                onChange={onChangeDescription}
              />
            </div>
          </form>
          <button
            className="badge badge-danger mr-2"
            onClick={deleteService}
          >
            Delete
          </button>
          <button
            type="button"
            className="badge badge-success"
            onClick={updateService}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>(List) --- Please click on a Service...</p>
        </div>
      )}
    </div>
  );
};

export default EditService;
