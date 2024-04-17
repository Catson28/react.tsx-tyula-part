import React from 'react';
import NavbarComponent from '../../partials/NavbarComponent';
import Graphtitle from './parts/Graphtitle';
import CustomersRelationshipGraphs from '../../partials/mainGraphs/pageGraphs/CustomersRelationshipGraphs'



const GraphCustomersRelationship: React.FC = () => {
  return (
    <NavbarComponent>   
        <Graphtitle>  
        Relacionamento com Clientes (CRM)
        </Graphtitle>  
        <CustomersRelationshipGraphs />
    </NavbarComponent>
  );
};

export default GraphCustomersRelationship;
