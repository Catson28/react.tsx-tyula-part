import React from 'react';
import NavbarComponent from '../../partials/NavbarComponent';
import Graphtitle from './parts/Graphtitle';
import SalesGraphs from '../../partials/mainGraphs/pageGraphs/SalesGraphs'



const GraphSales: React.FC = () => {
  return (
    <NavbarComponent>   
        <Graphtitle>  
            Progecao de Vendas
        </Graphtitle>
        <SalesGraphs />
    </NavbarComponent>
  );
};

export default GraphSales;