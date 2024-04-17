import React from 'react';
import PurchasesHorizontalBarChart from '../../graph/horizontalBar/PurchasesHorizontalBarChart';

const PurchasesGraph: React.FC = () => {
  return (
      <div>
        <h4>Volume de Compras por Fornecedor</h4>
        <PurchasesHorizontalBarChart />
      </div>
  );
};

export default PurchasesGraph;
