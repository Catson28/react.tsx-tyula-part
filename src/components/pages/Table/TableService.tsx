import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NavbarComponent from '../../partials/NavbarComponent';

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
  text-align: center;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 200px;
`;

const TableService: React.FC = () => {
  const [servicesData, setServicesData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/sales/provided-services/')
      .then(response => {
        setServicesData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <NavbarComponent>
      <Table>
        <thead>
          <TableRow>
          <TableHdCell widthPercentage="5%">ID do Serviço</TableHdCell>
            <TableHdCell widthPercentage="4%"><div style={{ display: 'flex', writingMode: 'vertical-lr'}}>N/F</div></TableHdCell>
            <TableHdCell widthPercentage="8%">Nome do Serviço</TableHdCell>
            <TableHdCell widthPercentage="8%">Descrição</TableHdCell>
            <TableHdCell widthPercentage="4%"><div style={{ display: 'flex', writingMode: 'vertical-lr'}}>Preço</div></TableHdCell>
            <TableHdCell widthPercentage="5%">Data de Duração</TableHdCell>
            <TableHdCell widthPercentage="5%">Preço Alternativo</TableHdCell>
            <TableHdCell widthPercentage="8%">Data de Emissão</TableHdCell>
            <TableHdCell widthPercentage="8%">Data de Vencimento</TableHdCell>
            <TableHdCell widthPercentage="8%">Tipo de Pagamento</TableHdCell>
            <TableHdCell widthPercentage="8%">Vendedor</TableHdCell>
            <TableHdCell widthPercentage="8%">Cliente</TableHdCell>
            <TableHdCell widthPercentage="8%">Categoria do Serviço</TableHdCell>
            <TableHdCell widthPercentage="8%">Valor Total do Serviço</TableHdCell>
            <TableHdCell widthPercentage="8%">Total da Fatura</TableHdCell>
          </TableRow>
        </thead>
        <tbody>
          {servicesData.map((service, index) => (
            <TableRow key={index}>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.id}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.invoice.invoice_number}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.service.name}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.service.description}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.service.price}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.service_date_duration}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.alternative_price}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.invoice.issuance_date}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.invoice.due_date}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.invoice.payment_type}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.invoice.seller.person.name}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.invoice.client.person.name}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.invoice.category.name}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.total_service_value}</div></div></TableCell>
              <TableCell><div style={{ display: 'flex', overflow: 'hidden' }}><div style={{ whiteSpace: 'nowrap' }}>{service.invoice.total_amount}</div></div></TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>    
    </NavbarComponent>
  );
};

export default TableService;
