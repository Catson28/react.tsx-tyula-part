import React from 'react';
import { Bar } from 'react-chartjs-2';

const SalesHorizontalBarChart: React.FC = () => {
  const data = {
    labels: ['Vendedor A', 'Vendedor B', 'Vendedor C', 'Vendedor D', 'Vendedor E'],
    datasets: [
      {
        label: 'Vendas',
        data: [50000, 60000, 45000, 70000, 55000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1>Gráfico de Barra Horizontal - Vendas por Vendedor</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesHorizontalBarChart;
