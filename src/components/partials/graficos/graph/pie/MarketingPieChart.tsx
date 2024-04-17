import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartOptions, Chart } from 'chart.js'; // Importe também o elemento Chart

// Importe os elementos específicos necessários do Chart.js
import { ArcElement, Title, Legend } from 'chart.js';

const MarketingPieChart: React.FC = () => {
  const data = {
    labels: ['Campanha A', 'Campanha B', 'Campanha C'],
    datasets: [
      {
        label: 'Participação de Mercado',
        data: [30, 40, 30], // Valores percentuais para cada campanha
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
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
      <h2>Gráfico de Pizza - Participação de Mercado em Marketing e Promoções</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default MarketingPieChart;
