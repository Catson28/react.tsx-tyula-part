import React from 'react';
import { Radar } from 'react-chartjs-2';

const CRMRelationshipRadarChart: React.FC = () => {
  const data = {
    labels: ['Atendimento', 'Qualidade do Produto', 'Preço', 'Comunicação', 'Feedback'],
    datasets: [
      {
        label: 'Cliente A',
        data: [80, 70, 90, 85, 75],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Cliente B',
        data: [70, 85, 80, 75, 90],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    // opções do gráfico de radar
  };

  return (
    <div>
      <h1>Gráfico de Radar - Satisfação dos Clientes em Diferentes Aspectos</h1>
      <Radar data={data} options={options} />
    </div>
  );
};

export default CRMRelationshipRadarChart;
