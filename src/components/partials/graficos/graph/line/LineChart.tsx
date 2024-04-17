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

interface LineChartProps {
  data: number[];
  labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ data, labels }) => {
  // Configurações do gráfico
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Exemplo de Dados',
        data: data,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        pointRadius: 5, // Exemplo de configuração do tamanho do ponto
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
      <Line data={chartData} options={chartOptions} />
    </ChartContainer>
  );
};

export default LineChart;
