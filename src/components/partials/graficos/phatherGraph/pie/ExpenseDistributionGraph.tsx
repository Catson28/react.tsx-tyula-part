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
        <h1>Gráfico de Pizza - Distribuição de Despesas</h1>
        <PieChart data={expenseData} />
      </div>
  );
};

export default ExpenseDistributionGraph;
