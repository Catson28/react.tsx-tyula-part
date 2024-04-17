import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {  ChartOptions } from 'chart.js';

interface ScatterChartProps {
  data: { x: number; y: number }[];
}

const ScatterChart: React.FC<ScatterChartProps> = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Dados de Marketing',
        data: data,
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

  return <Scatter data={chartData} options={options} />;
};

export default ScatterChart;
