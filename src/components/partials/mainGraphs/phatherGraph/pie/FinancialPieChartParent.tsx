import React from 'react';
import FinancialPieChart from '../../graph/pie/FinancialPieChart';

const FinancialPieChartParent: React.FC = () => {
  return (
    <div>
      <h4>Distribuição das Despesas em Financeiro e Contabilidade</h4>
      <FinancialPieChart />
    </div>
  );
};

export default FinancialPieChartParent;
