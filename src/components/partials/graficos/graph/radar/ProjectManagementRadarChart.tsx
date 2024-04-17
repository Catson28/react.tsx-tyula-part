import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, ChartOptions } from 'chart.js'; // Importe o Chart do chart.js

// Importe os elementos necessários do chart.js
import { RadialLinearScale, PointElement, LineElement } from 'chart.js';

// Registre os elementos
Chart.register(RadialLinearScale, PointElement, LineElement);

const ProjectManagementRadarChart: React.FC = () => {
  const data = {
    labels: ['Tempo', 'Custo', 'Qualidade'],
    datasets: [
      {
        label: 'Projeto A',
        data: [7, 8, 9],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        pointRadius: 4,
      },
      {
        label: 'Projeto B',
        data: [8, 7, 8],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        pointRadius: 4,
      },
    ],
  };


  const options: ChartOptions<'radar'> = {
    scales: {
      r: {
        type: 'radialLinear', // Define o tipo de escala como radialLinear
        beginAtZero: true,
        max: 10,
      },
    },
  };

  return (
    <div>
      <h1>Gráfico de Radar - Distribuição de Recursos em Projetos</h1>
      <Radar data={data} options={options} />
    </div>
  );
};

export default ProjectManagementRadarChart;
