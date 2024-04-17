import React from 'react';
import { Radar } from 'react-chartjs-2';

const ProjectManagementRadarChart: React.FC = () => {
  const data = {
    labels: ['Recurso 1', 'Recurso 2', 'Recurso 3', 'Recurso 4', 'Recurso 5'],
    datasets: [
      {
        label: 'Projeto A',
        data: [80, 70, 90, 85, 75],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Projeto B',
        data: [70, 85, 80, 75, 90],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // opções do gráfico de radar
  };

  return (
    <div>
      <h4>Distribuição de Recursos em Projetos</h4>
      <Radar data={data} options={options} />
    </div>
  );
};

export default ProjectManagementRadarChart;
