import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {  ChartOptions } from 'chart.js';



interface DoughnutChartProps {
  data: { label: string; value: number }[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Custos',
        data: data.map(item => item.value),
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

  return <Doughnut data={chartData} options={options} />;
};

export default DoughnutChart;
