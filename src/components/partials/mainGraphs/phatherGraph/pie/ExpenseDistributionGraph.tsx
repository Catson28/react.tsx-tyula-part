import React from 'react';
import PieChart from '../../graph/pie/PieChart';

const ExpenseDistributionGraph: React.FC = () => {
  // Dados de exemplo para distribuição de despesas
  const expenseData = [
    { label: 'Salários', value: 40 },
    { label: 'Fornecedores', value: 30 },
    { label: 'Impostos', value: 30 },
  ];

  return (
      <div>
        <h4>Distribuição de Despesas</h4>
        <PieChart data={expenseData} />
      </div>
  );
};

export default ExpenseDistributionGraph;
