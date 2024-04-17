import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js'; // Importe o Chart do chart.js


const CRMInteractionsPolarAreaChart: React.FC = () => {
  const data = {
    labels: ['Telefone', 'E-mail', 'Redes Sociais'],
    datasets: [
      {
        label: 'Distribuição de Interactions',
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

  const options: ChartOptions<'polarArea'> = {

    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div>
      <h1>Distribuição de Interações com Clientes por Canal</h1>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default CRMInteractionsPolarAreaChart;
