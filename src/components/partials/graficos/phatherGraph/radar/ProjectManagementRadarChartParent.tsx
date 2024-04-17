import React from 'react';
import ProjectManagementRadarChart from '../../graph/radar/ProjectManagementRadarChart';
import TwoColumnLayout from '../../TwoColumnLayout';

const ProjectManagementRadarChartParent: React.FC = () => {
  return (
    <TwoColumnLayout>
      <div>
        <h1>Gráfico de Radar - Distribuição de Recursos em Projetos</h1>
        <ProjectManagementRadarChart />
      </div>
    </TwoColumnLayout>
  );
};

export default ProjectManagementRadarChartParent;
