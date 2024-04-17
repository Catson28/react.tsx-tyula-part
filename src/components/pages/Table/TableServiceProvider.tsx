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

const TableServiceProvider: React.FC = () => {
  const [servicesData, setServicesData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/sales/provided-service-enpl/')
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
            <TableHdCell widthPercentage="8%">Data de Duração</TableHdCell>
            <TableHdCell widthPercentage="5%">Preço Alternativo</TableHdCell>
            <TableHdCell widthPercentage="8%">Data de Emissão</TableHdCell>
            <TableHdCell widthPercentage="8%">Data de Vencimento</TableHdCell>
            <TableHdCell widthPercentage="8%">Tipo de Pagamento</TableHdCell>
            <TableHdCell widthPercentage="8%">Prestador do servico</TableHdCell>
            <TableHdCell widthPercentage="8%">Cliente</TableHdCell>
            <TableHdCell widthPercentage="8%">Categoria do Serviço</TableHdCell>
            <TableHdCell widthPercentage="8%">Valor Total do Serviço</TableHdCell>
            <TableHdCell widthPercentage="8%">Total da Fatura</TableHdCell>
          </TableRow>
        </thead>
        <tbody>
          {servicesData.map((service, index) => (
            <TableRow key={index}>
              <TableCell>{service.id}</TableCell>
              <TableCell>{service.provided_service.service_date_duration}</TableCell>
              <TableCell>{service.provided_service.alternative_price}</TableCell>
              <TableCell>{service.provided_service.invoice.issuance_date}</TableCell>
              <TableCell>{service.provided_service.invoice.due_date}</TableCell>
              <TableCell>{service.provided_service.invoice.payment_type}</TableCell>
              <TableCell>{service.employee.person.name}</TableCell>
              <TableCell>{service.provided_service.invoice.client.person.name}</TableCell>
              <TableCell>{service.provided_service.invoice.category.name}</TableCell>
              <TableCell>{service.provided_service.total_service_value}</TableCell>
              <TableCell>{service.provided_service.invoice.total_amount}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>    
    </NavbarComponent>
  );
};

export default TableServiceProvider;
