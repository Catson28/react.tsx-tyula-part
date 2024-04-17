
/*
import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {  ChartOptions } from 'chart.js';

const MarketingScatterChart: React.FC = () => {
  const data = {
    datasets: [
      {
        label: 'Campanha A',
        data: [
          { x: 100, y: 200 },
          { x: 150, y: 250 },
          { x: 200, y: 300 },
          { x: 250, y: 350 },
          { x: 300, y: 400 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Campanha B',
        data: [
          { x: 120, y: 180 },
          { x: 170, y: 230 },
          { x: 210, y: 280 },
          { x: 260, y: 330 },
          { x: 310, y: 380 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
      <h1>Gráfico de Dispersão - Relação entre Investimento em Marketing e ROI</h1>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default MarketingScatterChart;
*/
import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {  ChartOptions } from 'chart.js';

const MarketingScatterChart: React.FC = () => {
  const data = {
    datasets: [
      {
        label: 'Campanha A',
        data: [
          { x: 100, y: 200 },
          { x: 150, y: 250 },
          { x: 200, y: 300 },
          { x: 250, y: 350 },
          { x: 300, y: 400 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Campanha B',
        data: [
          { x: 120, y: 180 },
          { x: 170, y: 230 },
          { x: 210, y: 280 },
          { x: 260, y: 330 },
          { x: 310, y: 380 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
      <h1>Gráfico de Dispersão - Relação entre Investimento em Marketing e ROI</h1>
      <Scatter data={data} options={options} />
    </div>
  );
};

export default MarketingScatterChart;
