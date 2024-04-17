import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {  ChartOptions } from 'chart.js';


const HRPayrollDoughnutChart: React.FC = () => {
  const data = {
    labels: ['Salários', 'Benefícios', 'Impostos'],
    datasets: [
      {
        label: 'Custos com Folha de Pagamento',
        data: [60, 25, 15],
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


  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div>
      <h1>Gráfico de Rosca - Custos com Folha de Pagamento por Tipo de Benefício</h1>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default HRPayrollDoughnutChart;
