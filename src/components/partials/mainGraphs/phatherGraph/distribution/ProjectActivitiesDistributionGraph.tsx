import React from 'react';
import PolarAreaChart from '../../graph/polarArea/PolarAreaChart';

const ProjectActivitiesDistributionGraph: React.FC = () => {
  // Dados de exemplo para distribuição de atividades em fases de projeto
  const projectActivitiesData = [
    { label: 'Planejamento', value: 50 },
    { label: 'Execução', value: 30 },
    { label: 'Encerramento', value: 20 },
  ];

  return (
      <div>
        <h1>Distribuição de Atividades em Fases de Projeto</h1>
        <PolarAreaChart data={projectActivitiesData} />
      </div>
  );
};

export default ProjectActivitiesDistributionGraph;
