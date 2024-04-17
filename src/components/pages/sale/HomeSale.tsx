import React, { useState } from 'react';
import styled from 'styled-components';

// Interface para representar os dados do cliente
interface ClientData {
  id: number;
  name: string;
  address: string;
  contact: string;
  email: string;
}

// Interface para representar os dados do serviço
interface ServiceData {
  id: number;
  name: string;
  description: string;
  price: string;
  duration?: string;
}

// Interface para representar os dados da fatura
interface InvoiceData {
  invoiceNumber: string;
  issuanceDate: string;
  dueDate: string;
  paymentType: string;
  totalAmount: string;
}

// Interface para representar os dados do vendedor
interface SellerData {
  id: number;
  name: string;
  position: string;
  contact: string;
}

// Props do componente
interface HomeSaleProps {
  clients: ClientData[];
  services: ServiceData[];
  sellers: SellerData[];
  onConfirm: () => void;
  onCancel: () => void;
}

// Componente principal
const HomeSale: React.FC<HomeSaleProps> = ({
  clients,
  services,
  sellers,
  onConfirm,
  onCancel,
}) => {
  const [selectedClient, setSelectedClient] = useState<ClientData | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    invoiceNumber: '',
    issuanceDate: '',
    dueDate: '',
    paymentType: '',
    totalAmount: '',
  });
  const [selectedSeller, setSelectedSeller] = useState<SellerData | null>(null);


  // alert(selectedClient);

  return (
    <Container>
      <ClientSection>
        <SelectClient onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const selectedId = parseInt(e.target.value);
          const selectedClient = clients.find((client) => client.id === selectedId);
          setSelectedClient(selectedClient ? selectedClient : null);
        }}>
          <option value="">Selecione um cliente</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>{client.name}</option>
          ))}
        </SelectClient>
        {selectedClient && (
          <ClientInfo>
            <p>Nome: {selectedClient.name}</p>
            <p>Endereço: {selectedClient.address}</p>
            <p>Contato: {selectedClient.contact}</p>
            <p>Email: {selectedClient.email}</p>
          </ClientInfo>
        )}
      </ClientSection>

      <ServiceSection>
        <SelectService onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const selectedId = parseInt(e.target.value);
          const selectedService = services.find((service) => service.id === selectedId);
          setSelectedService(selectedService || null);
        }}>
          <option value="">Selecione um serviço</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>{service.name}</option>
          ))}
        </SelectService>


        {/* Mostrar detalhes do serviço selecionado */}
        {selectedService && (
          <ServiceInfo>
            <p>Nome: {selectedService.name}</p>
            <p>Descrição: {selectedService.description}</p>
            <p>Preço: {selectedService.price}</p>
            {selectedService.duration && <p>Duração: {selectedService.duration}</p>}
          </ServiceInfo>
        )}
      </ServiceSection>

      <InvoiceSection>
        {/* Campos para dados da fatura */}
        <InvoiceFields>
          {/* Implemente os campos da fatura aqui */}
        </InvoiceFields>
      </InvoiceSection>

      <SellerSection>
        <SelectSeller onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          const selectedId = parseInt(e.target.value);
          const selectedSeller = sellers.find((seller) => seller.id === selectedId);
          setSelectedSeller(selectedSeller || null);
        }}>
          <option value="">Selecione um vendedor</option>
          {sellers.map((seller) => (
            <option key={seller.id} value={seller.id}>{seller.name}</option>
          ))}
        </SelectSeller>


        {/* Mostrar detalhes do vendedor selecionado */}
        {selectedSeller && (
          <SellerInfo>
            <p>Nome: {selectedSeller.name}</p>
            <p>Cargo: {selectedSeller.position}</p>
            <p>Contato: {selectedSeller.contact}</p>
          </SellerInfo>
        )}
      </SellerSection>

      <ButtonsSection>
        <ConfirmButton onClick={onConfirm}>Confirmar</ConfirmButton>
        <CancelButton onClick={onCancel}>Cancelar</CancelButton>
      </ButtonsSection>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;


const ClientSection = styled.div`
  /* Estilos para a seção de cliente */
  margin-bottom: 20px; /* Exemplo de estilo */
`;

const SelectClient = styled.select`
  /* Estilos para o select de cliente */
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ClientInfo = styled.div`
  /* Estilos para as informações do cliente */
  margin-top: 10px; /* Exemplo de estilo */
`;



const ServiceSection = styled.div`
  /* Estilos para a seção de serviço */
`;

// Corrigir o tipo do componente SelectService
const SelectService = styled.select`
  /* Estilos para o select de serviço */
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

// Corrigir o tipo do componente SelectSeller
const SelectSeller = styled.select`
  /* Estilos para o select de vendedor */
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ServiceInfo = styled.div`
  /* Estilos para as informações do serviço */
`;

const InvoiceSection = styled.div`
  /* Estilos para a seção de fatura */
`;

const InvoiceFields = styled.div`
  /* Estilos para os campos da fatura */
`;

const SellerSection = styled.div`
  /* Estilos para a seção do vendedor */
`;



const SellerInfo = styled.div`
  /* Estilos para as informações do vendedor */
`;






const Select = styled.select`
  /* Estilos para os selects */
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Info = styled.div`
  /* Estilos para as informações */
  margin-top: 10px;
`;

const ButtonsSection = styled(Section)`
  /* Estilos para a seção de botões */
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  /* Estilos para os botões */
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const ConfirmButton = styled(Button)`
  /* Estilos para o botão de confirmar */
  background-color: green;
  color: white;
`;

const CancelButton = styled(Button)`
  /* Estilos para o botão de cancelar */
  background-color: red;
  color: white;
`;

export default HomeSale;
