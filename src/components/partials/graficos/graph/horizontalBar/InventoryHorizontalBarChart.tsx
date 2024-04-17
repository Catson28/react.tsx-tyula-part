import React from 'react';
import { Bar } from 'react-chartjs-2';

const InventoryHorizontalBarChart: React.FC = () => {
  const data = {
    labels: ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D', 'Categoria E'],
    datasets: [
      {
        label: 'Quantidade em Estoque',
        data: [500, 600, 450, 700, 550],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
      <h1>Gráfico de Barra Horizontal - Quantidade em Estoque por Categoria</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default InventoryHorizontalBarChart;
