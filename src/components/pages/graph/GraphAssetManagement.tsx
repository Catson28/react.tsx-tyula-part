import React from 'react';
import NavbarComponent from '../../partials/NavbarComponent';
import Graphtitle from './parts/Graphtitle';
import AssetManagementGraphs from '../../partials/mainGraphs/pageGraphs/AssetManagementGraphs'



const GraphAssetManagement: React.FC = () => {
  return (
    <NavbarComponent>  
        <Graphtitle>  
          Gestão de Ativos
        </Graphtitle>  
        <AssetManagementGraphs />
    </NavbarComponent>
  );
};

export default GraphAssetManagement;

