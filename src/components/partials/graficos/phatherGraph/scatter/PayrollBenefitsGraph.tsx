import React from 'react';
import DoughnutChart from '../../graph/doughnut/DoughnutChart';
import TwoColumnLayout from '../../TwoColumnLayout';

const PayrollBenefitsGraph: React.FC = () => {
  // Dados de exemplo para mostrar distribuição dos custos com folha de pagamento
  const payrollData = [
    { label: 'Salários', value: 60 },
    { label: 'Benefícios', value: 25 },
    { label: 'Impostos', value: 15 },
  ];

  return (
    <TwoColumnLayout>
      <div>
        <h1>Gráfico de Rosca - Distribuição dos Custos com Folha de Pagamento</h1>
        <DoughnutChart data={payrollData} />
      </div>
    </TwoColumnLayout>
  );
};

export default PayrollBenefitsGraph;
