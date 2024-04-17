import React from 'react';
import FinancialPieChart from '../../graph/pie/FinancialPieChart';

const FinancialPieChartParent: React.FC = () => {
  return (
    <div>
      <h1>Gráfico de Pizza - Distribuição das Despesas em Financeiro e Contabilidade</h1>
      <FinancialPieChart />
    </div>
  );
};

export default FinancialPieChartParent;
