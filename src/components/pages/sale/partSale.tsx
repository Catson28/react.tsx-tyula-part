import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import NavbarComponent from '../../partials/NavbarComponent'
import SaleTable from '../Table/SaleTable';
import InvoiceComponent from './InvoiceComponent';
import ServiceDataService from "../../../services/net/ServiceDataService";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
`;

const RightPane = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: lightblue;
`;

const TopLeftPane = styled.div`
  background-color: lightgreen;
`;

const BottomLeftPane = styled.div`
  background-color: lightcoral;
`;


// Estilos para o container principal
const FormControl = styled.div`
padding: 10px;
align-items: center;
gap: 10px;
`;



// Estilos para o container principal
const FormClient = styled.div`
width:100%;
background-color:#fff;
padding: 10px;
align-items: center;
gap: 10px;
`;

const FormColumn = styled.div`
  width:100%;
`;

const FormServ = styled.div`
  width:50%;
`;

const FormQuantity = styled.div`
  width:50%;
  // max-width: 150px; /* Ajuste o valor conforme necessário */
`;

const FormNote = styled.div`
  max-width: 200px; /* Ajuste o valor conforme necessário */
`;

const GroupRowItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* Alinha os itens verticalmente */
  justify-content: space-between; /* Distribui o espaço entre os itens */
  gap: 10px; /* Adiciona espaçamento entre os itens */
`;


const GroupRowClient = styled.div`
  display: flex;
  flex-direction: row;
  // align-items: center; /* Alinha os itens verticalmente */
  justify-content: space-between; /* Distribui o espaço entre os itens */
  // gap: 10px; /* Adiciona espaçamento entre os itens */
`;

const GroupRowNotes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center; /* Alinha os itens verticalmente */
  justify-content: space-between; /* Distribui o espaço entre os itens */
  gap: 10px; /* Adiciona espaçamento entre os itens */
`;



// Estilos para o container principal
const GroupRowContent = styled.div`
  display: flex;
  flex-direction: row;
  // grid-template-rows: 1fr 1fr;
  // align-items: center;
  // justify-content:space-between;
`;

const GroupQuntNote = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  grid-template-rows: 1fr 1fr;
  // flex-wrap: wrap; /* Adicionando flex-wrap para que os itens quebrem para a próxima linha */
`;

// Estilos para o título ou label
const Titles = styled.h2`
  font-size: 18px;
  margin: 0 5px;
`;



const Title = styled.div<{ selected: boolean }>`
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-weight: bold;
  color: ${({ selected }) => (selected ? 'white' : 'black')};
`;

// Estilos para o select dropdown
const Select = styled.select`
  flex: 1; /* Ocupa todo o espaço disponível */
  padding: 8px;
  margin:5px;
  // margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

// Estilos para o select dropdown
const SelectNote = styled.select`
  width: 80%;
  // flex: 1; /* Ocupa todo o espaço disponível */
  padding: 8px;
  margin:5px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

// Estilos para o select dropdown
const InputField = styled.input`
  flex: 1; /* Ocupa todo o espaço disponível */
  // width:100%;
  padding: 4px;
  margin: 5px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

// Estilos para o select dropdown
const InputQnt = styled.input`
  flex: 1; /* Ocupa todo o espaço disponível */
  width:100%;
  padding: 4px;
  margin: 5px ;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

// Estilos para o botão "Adicionar"
const Button = styled.button`
  padding: 6px 12px; /* Ajuste o padding conforme necessário */
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const GridComponent = () => {

// export default class GridComponent extends Component<Props, State> {


const [services, setServices] = useState([]);

useEffect(() => {
  ServiceDataService.getAll()
    .then((response: any) => {
      setServices(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}, []);


  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };


  // Definindo o estado para o total e o troco
  const [total, setTotal] = React.useState<number>(100);
  const [change, setChange] = React.useState<number>(0);

  // Função para lidar com o clique no botão de confirmação de pagamento
  const handlePaymentConfirmation = () => {
    // Lógica para finalizar o pagamento e calcular o troco
    const paymentAmount = 120; // Exemplo de valor pago pelo cliente
    const calculatedChange = paymentAmount - total;
    setChange(calculatedChange > 0 ? calculatedChange : 0);
  };

  return (
    <NavbarComponent>
        <GridContainer>
          <TopLeftPane>  
            <GroupRowClient>
              <FormClient>
                <Titles>Cliente:</Titles>
                <GroupRowItems>
                  <Select>
                    <option value="opcao1">Opção 1</option>
                    <option value="opcao2">Opção 2</option>
                    <option value="opcao3">Opção 3</option>
                  </Select>
                  <Button>Novo</Button>
                </GroupRowItems>
              </FormClient>   
              <FormClient>
                <Titles>Tipo de Pagamento:</Titles>
                <GroupRowItems>
                  <Select>
                    <option value="opcao1">Opção 1</option>
                    <option value="opcao2">Opção 2</option>
                    <option value="opcao3">Opção 3</option>
                  </Select>
                </GroupRowItems>
              </FormClient>              
            </GroupRowClient>
            <SaleTable />
            <InvoiceComponent total={total} change={change} onButtonClick={handlePaymentConfirmation} />
          </TopLeftPane>
          <RightPane>
            <FormControl>
              <GroupRowContent>
                <FormServ>
                  <Titles>Servico:</Titles>
                  <GroupRowItems>
                    <InputField />
                  </GroupRowItems>
                </FormServ>
                <GroupQuntNote>
                  <FormQuantity>
                    <Titles>Quantidade:</Titles>
                    <GroupRowItems>
                      <InputQnt />
                    </GroupRowItems>
                  </FormQuantity>
                  <FormNote>
                    <Titles>Nota:</Titles>
                    <GroupRowNotes>
                      <SelectNote>
                        <option value="opcao1">Valor</option>
                        <option value="opcao1">200</option>
                        <option value="opcao2">500</option>
                        <option value="opcao3">1000</option>
                        <option value="opcao3">2000</option>
                        <option value="opcao3">5000</option>
                      </SelectNote>
                      <Button>+</Button>                      
                    </GroupRowNotes>
                  </FormNote>                    
                </GroupQuntNote>
              
              </GroupRowContent>


            </FormControl>

            
            <FormControl>
              <GalleryContainer>
                {services.map((service: any, index: number) => (
                  <ServiceCard key={service.id} selected={selectedCard === index} onClick={() => handleCardClick(index)}>
                    <Title selected={selectedCard === index}>{service.name}</Title>
                    <Subtitle>{service.price}</Subtitle>
                    {service.cover && ( // Verifica se cover não é null
                      <ServiceImage src={`http://localhost:8000${service.cover.Path}`} alt="Service Image" />
                    )}
                  </ServiceCard>
                ))}
              </GalleryContainer>  
            </FormControl>


          </RightPane>
          <BottomLeftPane>Bottom Left Pane</BottomLeftPane>
        </GridContainer>
    </NavbarComponent>

  );
};

export default GridComponent;


// Styled component for flex container
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
`;

const ServiceCard = styled.div<{ selected: boolean }>`
  position: relative;
  width: 100%;
  height: 110px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: 2px solid transparent;
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

const Subtitle = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 12px;
`;
