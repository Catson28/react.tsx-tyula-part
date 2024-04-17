import React from 'react';
import NavbarComponent from '../../partials/NavbarComponent';
import Graphtitle from './parts/Graphtitle';
import PurchaseSuppliersGraphs from '../../partials/mainGraphs/pageGraphs/PurchaseSuppliersGraphs'



const GraphPurchaseSuppliers: React.FC = () => {
  return (
    <NavbarComponent>   
        <Graphtitle>  
          Compras e Fornecedores
        </Graphtitle>  
        <PurchaseSuppliersGraphs />
    </NavbarComponent>
  );
};

export default GraphPurchaseSuppliers;
