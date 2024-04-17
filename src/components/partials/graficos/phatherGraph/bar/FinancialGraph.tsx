import React from 'react';
import FinancialHorizontalBarChart from '../../graph/horizontalBar/FinancialHorizontalBarChart';
import TwoColumnLayout from '../../TwoColumnLayout';

const FinancialGraph: React.FC = () => {
  return (
    <TwoColumnLayout>
      <div>
        <h1>Gráfico de Barra Horizontal - Receitas e Despesas por Departamento</h1>
        <FinancialHorizontalBarChart />
      </div>
    </TwoColumnLayout>
  );
};

export default FinancialGraph;
