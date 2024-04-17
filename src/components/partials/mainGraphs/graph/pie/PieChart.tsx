import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartOptions, Chart } from 'chart.js'; // Importe também o elemento Chart

// Importe os elementos específicos necessários do Chart.js
import { ArcElement, Title, Legend } from 'chart.js';

interface PieChartProps {
  data: { label: string; value: number }[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
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

  return <Pie data={chartData} options={options} />;
};

export default PieChart;
