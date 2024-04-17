import React from 'react';
import FinancialHorizontalBarChart from '../../graph/horizontalBar/FinancialHorizontalBarChart';

const FinancialGraphParent: React.FC = () => {
  return (
      <div>
        <h4>Receitas e Despesas por Departamento</h4>
        <FinancialHorizontalBarChart />
      </div>
  );
};

export default FinancialGraphParent;
