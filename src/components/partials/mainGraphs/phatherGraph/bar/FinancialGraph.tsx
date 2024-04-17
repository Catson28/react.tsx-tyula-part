import React from 'react';
import FinancialHorizontalBarChart from '../../graph/horizontalBar/FinancialHorizontalBarChart';
import TwoColumnLayout from '../../TwoColumnLayout';

const FinancialGraph: React.FC = () => {
  return (
    <TwoColumnLayout>
      <div>
        <h4>Receitas e Despesas por Departamento</h4>
        <FinancialHorizontalBarChart />
      </div>
    </TwoColumnLayout>
  );
};

export default FinancialGraph;
