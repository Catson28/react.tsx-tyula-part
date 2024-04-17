import React, { useState, useEffect } from "react";
import IServiceData from '../../../services/types/service.type';
import ICategoryData from '../../../services/types/category.type'; // Import ICategoryData type
import ServiceDataService from "../../../services/net/ServiceDataService";
import styled from 'styled-components';

interface Props {
  id: number | string; // Accept both number and string for id
  onAddProductService: (service: IServiceData) => void;
}

// Styled component for flex container
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 10px;
`;

const ServiceCard = styled.div<{ selected: boolean }>`
  position: relative;
  width: 100%;
  height: 120px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: 3px solid transparent;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.05);
  }

  ${({ selected }) =>
    selected &&
    `
    transform: scale(1.1);
    border-color: #0d6efd;
  `}
`;


const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.div<{ selected: boolean }>`
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-weight: bold;
  color: ${({ selected }) => (selected ? 'white' : 'black')};
`;

const Subtitle = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 12px;
`;

const ListProductServices: React.FC<Props> = ({ id, onAddProductService }) => {
  const [currentService, setCurrentService] = useState<IServiceData>({
    id: 0, // Use 0 instead of null for id
    name: "",
    description: "",
    price: undefined,
    subcategory: "",
    images: [],
    products: [],
    cover: null, // Use null instead of an empty string for cover
  });
  
  const [categories, setCategories] = useState<ICategoryData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (id) {
      getService(id.toString()); // Convert id to string before passing to getService
    }
  }, [id]);


  const getService = (id: string) => {
    // Assuming ServiceDataService is imported and available
    ServiceDataService.get(id)
      .then((response: any) => {
        setCurrentService(response.data);
        setSelectedCategory(response.data.category);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  return (
    <div>
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Lista de Produtos do Servico</h4>
          <GalleryContainer>
            <ServiceCard selected={selectedCard === 0} onClick={() => handleCardClick(0)}>
              <Title selected={selectedCard === 0}>Atom</Title>
              <Subtitle>11.99</Subtitle>
              <ServiceImage src="http://localhost:8000/media/images/35652246.jpg" alt="Service Image" />
            </ServiceCard>
            <ServiceCard selected={selectedCard === 1} onClick={() => handleCardClick(1)}>
              <Title selected={selectedCard === 1}>Limon</Title>
              <Subtitle>110.99</Subtitle>
              <ServiceImage src="http://localhost:8000/media/images/D_NQ_NP_773592-MLB71333730379_082023-O.webp" alt="Service Image" />
            </ServiceCard>
          </GalleryContainer>

          <button
            className="m-3 btn btn-sm btn-danger"
          >
            Remove All
          </button>

          <button
              className="btn btn-sm btn-success ml-2" onClick={() => onAddProductService(currentService as IServiceData)} // Use 'as IServiceData' to cast currentService to IServiceData
            >
              Adicionar
            </button>
        </div>
        <div className="col-md-6">
          <div>
            <h4>Produto</h4>
            <FlexContainer>
              <div className="col-md-6">
                <div>
                  <label>
                    <strong>Name:</strong>
                  </label>
                </div>
                <div>
                  <label>
                    <strong>Description:</strong>
                  </label>
                </div>
                <div>
                  <label>
                    <strong>Price:</strong>
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                {/* Placeholder for ServiceImageCover */}
              </div>
            </FlexContainer>
            <div>
              <label>
                <strong>Images:</strong>
              </label>
              {/* Placeholder for ServiceImageGalleryComplex */}
            </div>
            <button
              className="btn btn-sm badge badge-warning btn-warning ml-2"
            >
              Edit
            </button>
            <button
              className="btn btn-sm badge btn-primary ml-2"
            >
              Upload Photo
            </button>
          </div>
          <div>
            <br />
            <p>(List) --- Please click on a Service...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProductServices;
