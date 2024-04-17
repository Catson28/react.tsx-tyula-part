import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart } from 'chart.js'; // Importe o Chart do chart.js

// Importe os elementos necessários do chart.js
import { BarController, CategoryScale, LinearScale, PointElement, BarElement } from 'chart.js';

// Registre os elementos
Chart.register(BarController, CategoryScale, LinearScale, PointElement, BarElement);

// Estilos para o container do gráfico
const ChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

interface BarChartProps {
  data: number[];
  labels: string[];
}

const BarChart: React.FC<BarChartProps> = ({ data, labels }) => {
  // Configurações do gráfico de barras
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Vendas por Produto',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
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
      <h1>Vendas de diferentes produtos/serviços</h1>
      <Bar data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default BarChart;
