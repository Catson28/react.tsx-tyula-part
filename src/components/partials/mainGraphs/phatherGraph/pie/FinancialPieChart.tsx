import React from 'react';
import { Pie } from 'react-chartjs-2';

const FinancialPieChart: React.FC = () => {
  const data = {
    labels: ['Despesa 1', 'Despesa 2', 'Despesa 3'],
    datasets: [
      {
        label: 'Distribuição de Despesas',
        data: [300, 200, 500],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // opções do gráfico de pizza
  };

  return (
    <div>
      <h4>Distribuição de Despesas</h4>
      <Pie data={data} options={options} />
    </div>
  );
};

export default FinancialPieChart;
