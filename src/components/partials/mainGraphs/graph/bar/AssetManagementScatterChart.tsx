import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {  ChartOptions } from 'chart.js';

const AssetManagementScatterChart: React.FC = () => {
  const data = {
    datasets: [
      {
        label: 'Custos de Manutenção',
        data: [
          { x: 5, y: 1000 },
          { x: 10, y: 1500 },
          { x: 15, y: 2000 },
          { x: 20, y: 2500 },
          { x: 25, y: 3000 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'scatter'> = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        type: 'linear',
        position: 'left',
      },
    },
  };

  return (
    <div>
      <h1>Gráfico de Dispersão - Relação entre Idade dos Ativos e Custos de Manutenção</h1>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default AssetManagementScatterChart;
