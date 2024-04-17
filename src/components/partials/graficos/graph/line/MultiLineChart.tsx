import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart } from 'chart.js'; // Importe o Chart do chart.js

// Importe os elementos necessários do chart.js
import { LineController, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';

// Registre os elementos
Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement);

// Estilos para o container do gráfico
const ChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

interface MultiLineChartProps {
  datasets: { data: number[]; label: string }[];
  labels: string[];
}

const MultiLineChart: React.FC<MultiLineChartProps> = ({ datasets, labels }) => {
  // Configurações do gráfico de linhas múltiplas
  const chartData = {
    labels: labels,
    datasets: datasets.map((dataset, index) => ({
      label: dataset.label,
      data: dataset.data,
      fill: false,
      backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 0.4)`, // Cor aleatória para cada conjunto de dados
      borderColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)}, 1)`, // Cor aleatória para cada conjunto de dados
      borderWidth: 2,
      pointRadius: 5,
    })),
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <ChartContainer>
      <Line data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default MultiLineChart;
