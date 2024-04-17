import React from 'react';
import PurchasesHorizontalBarChart from '../../graph/horizontalBar/PurchasesHorizontalBarChart';

const PurchasesGraphParent: React.FC = () => {
  return (
      <div>
        <h4>Volume de Compras por Fornecedor</h4>
        <PurchasesHorizontalBarChart />
      </div>
  );
};

export default PurchasesGraphParent;
