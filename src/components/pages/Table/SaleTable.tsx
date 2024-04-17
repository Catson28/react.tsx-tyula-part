import React from 'react';
import styled from 'styled-components';

const servicesData = [
  {
    id: 1,
    service_date_duration: "2024-03-25 to 2024-03-27",
    alternative_price: "200.00",
    total_service_value: "500.00",
    invoice: {
      invoice_number: "1",
      issuance_date: "2024-03-02",
      due_date: "2024-03-02",
      payment_type: "Cartao",
      total_amount: "50000.00",
      seller: {
        type: "Gerente",
        person: {
          name: "Paulo Manuel",
          address: "Luanda",
          contact: "923349809",
          email: "pm@gmail.com",
          phone: "000000000"
        }
      },
      client: {
        person: {
          name: "Paulo Manuel",
          address: "Luanda",
          contact: "923349809",
          email: "pm@gmail.com",
          phone: "000000000"
        }
      },
      category: {
        name: "servico prestado"
      }
    },
    service: {
      quantity: "1",
      description: "Service Description",
      price: "50.00",
      hourly_rate: "25.00"
    }
  },
  {
    id: 2,
    service_date_duration: "2024-04-01 to 2024-04-03",
    alternative_price: "150.00",
    total_service_value: "400.00",
    invoice: {
      invoice_number: "2",
      issuance_date: "2024-03-10",
      due_date: "2024-03-10",
      payment_type: "Dinheiro",
      total_amount: "40000.00",
      seller: {
        type: "Vendedor",
        person: {
          name: "Maria Silva",
          address: "São Paulo",
          contact: "912345678",
          email: "ms@gmail.com",
          phone: "111111111"
        }
      },
      client: {
        person: {
          name: "Ana Santos",
          address: "Rio de Janeiro",
          contact: "987654321",
          email: "as@gmail.com",
          phone: "222222222"
        }
      },
      category: {
        name: "consultoria"
      }
    },
    service: {
      quantity: "6",
      description: "Professional consulting",
      price: "80.00",
      hourly_rate: "40.00"
    }
  },
  {
    id: 3,
    service_date_duration: "2024-04-05 to 2024-04-07",
    alternative_price: "300.00",
    total_service_value: "600.00",
    invoice: {
      invoice_number: "3",
      issuance_date: "2024-03-15",
      due_date: "2024-03-15",
      payment_type: "Transferência",
      total_amount: "60000.00",
      seller: {
        type: "Vendedor",
        person: {
          name: "José Oliveira",
          address: "Lisboa",
          contact: "934567890",
          email: "jo@gmail.com",
          phone: "333333333"
        }
      },
      client: {
        person: {
          name: "Carlos Fernandes",
          address: "Porto",
          contact: "876543210",
          email: "cf@gmail.com",
          phone: "444444444"
        }
      },
      category: {
        name: "marketing digital"
      }
    },
    service: {
      quantity: "3",
      description: "Online marketing strategies",
      price: "100.00",
      hourly_rate: "50.00"
    }
  }
  // Continuar com mais objetos...
  
  // Adicione mais objetos conforme necessário para representar outros serviços prestados
];

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f0f0f0;
  }

  &:nth-child(odd) {
    background-color: #e0e0e0;
  }
`;

const TableHdCell = styled.th<{ widthPercentage: string }>`
  background-color: #001e36;
  padding: 1px;
  border: 1px solid #001e36;
  font-size: 13px;
  color:#31a8ff;
  width: ${({ widthPercentage }) => widthPercentage};
  // writing-mode: vertical-lr; /* Transforma o texto em 90 graus para a direita */
  // writing-mode: vertical-rl; /* Transforma o texto em 90 graus para a esquerda */
  text-align: center; /* Centraliza o texto na célula */
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  font-size: 12px;
  white-space: nowrap; /* Impede a quebra de linha */
  text-overflow: ellipsis; /* Adiciona '...' quando o
  texto é truncado */
  overflow: hidden; /* Oculta o texto que transborda */
  max-width: 200px; /* Define o comprimento máximo */
`;

const SaleTable: React.FC = () => {
  return (
      <Table>
        <thead>
          <TableRow>
            <TableHdCell widthPercentage="5%">Nº</TableHdCell>
            <TableHdCell widthPercentage="8%">Descrição</TableHdCell>
            <TableHdCell widthPercentage="8%">Quantidade</TableHdCell>
            <TableHdCell widthPercentage="8%">Preço</TableHdCell>
            <TableHdCell widthPercentage="20%">Valor Total do Serviço</TableHdCell>
          </TableRow>
        </thead>
        <tbody>
          {servicesData.map((service, index) => (
            <TableRow key={index}>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.id}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.service.description}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.service.quantity}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.service.price}</div></div></TableCell>          
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.total_service_value}</div></div></TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>    
  );
};

export default SaleTable;
