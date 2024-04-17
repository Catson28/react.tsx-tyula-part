import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartOptions, Chart } from 'chart.js'; // Importe também o elemento Chart

// Importe os elementos específicos necessários do Chart.js
import { ArcElement, Title, Legend } from 'chart.js';

const FinancialPieChart: React.FC = () => {
  const data = {
    labels: ['Salários', 'Fornecedores', 'Impostos'],
    datasets: [
      {
        label: 'Distribuição de Despesas',
        data: [40, 30, 30],
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

  const options: ChartOptions<'pie'> = {
    plugins: {
      title: {
        display: true,
        text: 'Gráfico de Pizza - Distribuição de Despesas',
      },
      legend: {
        position: 'bottom',
      },
    },
  };

  // Adicione o elemento ArcElement ao Chart.js
  Chart.register(ArcElement);

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default FinancialPieChart;
