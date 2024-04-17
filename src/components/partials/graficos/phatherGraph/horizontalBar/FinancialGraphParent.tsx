import React from 'react';
import FinancialHorizontalBarChart from '../../graph/horizontalBar/FinancialHorizontalBarChart';

const FinancialGraphParent: React.FC = () => {
  return (
      <div>
        <h1>Gráfico de Barra Horizontal - Receitas e Despesas por Departamento</h1>
        <FinancialHorizontalBarChart />
      </div>
  );
};

export default FinancialGraphParent;
