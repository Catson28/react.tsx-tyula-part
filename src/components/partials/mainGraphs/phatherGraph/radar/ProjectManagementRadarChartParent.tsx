import React from 'react';
import ProjectManagementRadarChart from '../../graph/radar/ProjectManagementRadarChart';
import TwoColumnLayout from '../../TwoColumnLayout';

const ProjectManagementRadarChartParent: React.FC = () => {
  return (
    <TwoColumnLayout>
      <div>
        <h4>Distribuição de Recursos em Projetos</h4>
        <ProjectManagementRadarChart />
      </div>
    </TwoColumnLayout>
  );
};

export default ProjectManagementRadarChartParent;
