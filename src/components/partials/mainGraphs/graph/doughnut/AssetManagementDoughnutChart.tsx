import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {  ChartOptions } from 'chart.js';

const AssetManagementDoughnutChart: React.FC = () => {
  const data = {
    labels: ['Manutenção Preventiva', 'Manutenção Corretiva', 'Manutenção Preditiva'],
    datasets: [
      {
        label: 'Custos de Manutenção de Ativos',
        data: [40, 35, 25],
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

  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div>
      <h1>Gráfico de Rosca - Custos de Manutenção de Ativos por Categoria</h1>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default AssetManagementDoughnutChart;
