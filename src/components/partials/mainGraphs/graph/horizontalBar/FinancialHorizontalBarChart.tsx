import React from 'react';
import { Bar } from 'react-chartjs-2';

const FinancialHorizontalBarChart: React.FC = () => {
  const data = {
    labels: ['Departamento A', 'Departamento B', 'Departamento C', 'Departamento D', 'Departamento E'],
    datasets: [
      {
        label: 'Receitas',
        data: [30000, 40000, 35000, 45000, 38000],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Despesas',
        data: [20000, 25000, 22000, 28000, 23000],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 206, 86, 1)',
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

export default FinancialHorizontalBarChart;
