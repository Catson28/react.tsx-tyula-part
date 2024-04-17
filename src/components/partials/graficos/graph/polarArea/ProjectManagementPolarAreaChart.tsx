import React from 'react';
import { PolarArea } from 'react-chartjs-2';

const ProjectManagementPolarAreaChart: React.FC = () => {
  const data = {
    labels: ['Planejamento', 'Execução', 'Encerramento'],
    datasets: [
      {
        label: 'Distribuição de Atividades',
        data: [50, 30, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div>
      <h1>Gráfico de Área Polar - Distribuição de Atividades em Fases de Projeto</h1>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default ProjectManagementPolarAreaChart;
