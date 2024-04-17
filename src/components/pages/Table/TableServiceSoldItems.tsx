import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NavbarComponent from '../../partials/NavbarComponent';

// Definindo o tipo para o componente estilizado com a prop 'visible'
interface TextoVisibilidadeProps {
  visible: boolean;
}

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

// Criando o componente estilizado com a prop 'visible' definida
const TextoVisibilidade = styled.div<TextoVisibilidadeProps>`
  color: ${(props) => (props.visible ? '#007bff' : '#dc3545')};
`;

const Botao = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;


const TableServiceSoldItems: React.FC = () => {
  const [soldItemsData, setSoldItemsData] = useState<any[]>([]);
  const [sold, setSold] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/sales/sold-items/')
      .then(response => {
        setSoldItemsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleClick = () => {
    setSold(!sold); // Inverte o valor atual da variável
  };

  return (
    <NavbarComponent>
      <Botao onClick={handleClick}>Alternar Visibilidade</Botao>
      <TextoVisibilidade  visible={sold}>
        {sold ? (
            <>
              <Table>
                <thead>
                  <TableRow>
                    <TableHdCell widthPercentage="5%">ID do Item Vendido</TableHdCell>
                    <TableHdCell widthPercentage="5%">Quantidade</TableHdCell>
                    <TableHdCell widthPercentage="8%">Data de Emissão</TableHdCell>
                    <TableHdCell widthPercentage="8%">Data de Vencimento</TableHdCell>
                    <TableHdCell widthPercentage="8%">Tipo de Pagamento</TableHdCell>
                    <TableHdCell widthPercentage="8%">Vendedor</TableHdCell>
                    <TableHdCell widthPercentage="8%">Cliente</TableHdCell>
                    <TableHdCell widthPercentage="8%">Categoria do Produto</TableHdCell>
                    <TableHdCell widthPercentage="8%">Nome do Produto</TableHdCell>
                    <TableHdCell widthPercentage="8%">Descrição do Produto</TableHdCell>
                    <TableHdCell widthPercentage="8%">Custo do Produto</TableHdCell>
                    <TableHdCell widthPercentage="8%">Quantidade em Estoque</TableHdCell>
                  </TableRow>
                </thead>
                <tbody>
                  {soldItemsData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.invoice.issuance_date}</TableCell>
                      <TableCell>{item.invoice.due_date}</TableCell>
                      <TableCell>{item.invoice.payment_type}</TableCell>
                      <TableCell>{item.invoice.seller.person.name}</TableCell>
                      <TableCell>{item.invoice.client.person.name}</TableCell>
                      <TableCell>{item.product.category.name}</TableCell>
                      <TableCell>{item.product.name}</TableCell>
                      <TableCell>{item.product.description}</TableCell>
                      <TableCell>{item.product.cost}</TableCell>
                      <TableCell>{item.product.quantity}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>   
            </>
          ) : (
            <>
              <Table>
                <thead>
                  <TableRow>
                    <TableHdCell widthPercentage="5%">ID da Venda</TableHdCell>
                    <TableHdCell widthPercentage="5%">Quantidade</TableHdCell>
                    <TableHdCell widthPercentage="8%">Data de Emissão</TableHdCell>
                    <TableHdCell widthPercentage="8%">Data de Vencimento</TableHdCell>
                    <TableHdCell widthPercentage="8%">Tipo de Pagamento</TableHdCell>
                    <TableHdCell widthPercentage="8%">Vendedor</TableHdCell>
                    <TableHdCell widthPercentage="8%">Cliente</TableHdCell>
                    <TableHdCell widthPercentage="8%">Categoria do Produto</TableHdCell>
                    <TableHdCell widthPercentage="8%">Nome do Produto</TableHdCell>
                    <TableHdCell widthPercentage="8%">Descrição do Produto</TableHdCell>
                    <TableHdCell widthPercentage="8%">Preço Unitário</TableHdCell>
                    <TableHdCell widthPercentage="8%">Preço Total</TableHdCell>
                  </TableRow>
                </thead>
                <tbody>
                  {soldItemsData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.invoice.issuance_date}</TableCell>
                      <TableCell>{item.invoice.due_date}</TableCell>
                      <TableCell>{item.invoice.payment_type}</TableCell>
                      <TableCell>{item.invoice.seller.person.name}</TableCell>
                      <TableCell>{item.invoice.client.person.name}</TableCell>
                      <TableCell>{item.product.category.name}</TableCell>
                      <TableCell>{item.product.name}</TableCell>
                      <TableCell>{item.product.description}</TableCell>
                      <TableCell>{item.product.cost}</TableCell>
                      <TableCell>{parseFloat(item.product.cost) * item.quantity}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>    
            </>
          )}
      </TextoVisibilidade>
      
 
    </NavbarComponent>
  );
};

export default TableServiceSoldItems;
