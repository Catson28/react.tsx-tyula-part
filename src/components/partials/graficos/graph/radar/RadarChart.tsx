import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, ChartOptions } from 'chart.js'; // Importe o Chart do chart.js

// Importe os elementos necessários do chart.js
import { RadialLinearScale, PointElement, LineElement } from 'chart.js';

// Registre os elementos
Chart.register(RadialLinearScale, PointElement, LineElement);

interface RadarChartProps {
  datasets: { label: string; data: number[] }[];
  labels: string[];
}

const RadarChart: React.FC<RadarChartProps> = ({ datasets, labels }) => {
  const chartData = {
    labels: labels,
    datasets: datasets.map(item => ({
      label: item.label,
      data: item.data,
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      pointRadius: 5,
    })),
  };

  const options: ChartOptions<'radar'> = {
    scales: {
      r: {
        type: 'radialLinear', // Define o tipo de escala como radialLinear
        beginAtZero: true,// adicionei soo
        max: 10,// adicionei soo
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 10,
      },
    },
  };

  return <Radar data={chartData} options={options} />;
};

export default RadarChart;
