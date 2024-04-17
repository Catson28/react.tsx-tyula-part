import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js'; // Importe o Chart do chart.js

interface PolarAreaChartProps {
  data: { label: string; value: number }[];
}

const PolarAreaChart: React.FC<PolarAreaChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Dados de Atividades',
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

  const options: ChartOptions<'polarArea'> = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return <PolarArea data={chartData} options={options} />;
};

export default PolarAreaChart;

  
