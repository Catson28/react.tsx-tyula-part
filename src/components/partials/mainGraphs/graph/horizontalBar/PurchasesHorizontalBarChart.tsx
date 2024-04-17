import React from 'react';
import { Bar } from 'react-chartjs-2';

const PurchasesHorizontalBarChart: React.FC = () => {
  const data = {
    labels: ['Fornecedor A', 'Fornecedor B', 'Fornecedor C', 'Fornecedor D', 'Fornecedor E'],
    datasets: [
      {
        label: 'Volume de Compras',
        data: [20000, 18000, 25000, 30000, 22000],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default PurchasesHorizontalBarChart;
