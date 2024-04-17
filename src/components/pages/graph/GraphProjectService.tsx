import React from 'react';
import NavbarComponent from '../../partials/NavbarComponent';
import Graphtitle from './parts/Graphtitle';
import ProjectServiceGraphs from '../../partials/mainGraphs/pageGraphs/ProjectServiceGraphs'



const GraphProjectService: React.FC = () => {
  return (
    <NavbarComponent>   
        <Graphtitle>  
          Gestão de Projetos e Serviços
        </Graphtitle>  
        <ProjectServiceGraphs />
    </NavbarComponent>
  );
};

export default GraphProjectService;
