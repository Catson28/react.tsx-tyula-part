import React from 'react';
import DoughnutChart from '../../graph/doughnut/DoughnutChart';

const HRBenefitsDistributionGraph: React.FC = () => {
  // Dados de exemplo para distribuição de custos com benefícios
  const benefitsData = [
    { label: 'Saúde', value: 40 },
    { label: 'Transporte', value: 30 },
    { label: 'Alimentação', value: 30 },
  ];

  return (
      <div>
        <h1>Gráfico de Rosca - Distribuição de Custos com Benefícios</h1>
        <DoughnutChart data={benefitsData} />
      </div>
  );
};

export default HRBenefitsDistributionGraph;
