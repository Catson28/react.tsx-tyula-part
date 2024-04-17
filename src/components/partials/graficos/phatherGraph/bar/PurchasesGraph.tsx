import React from 'react';
import PurchasesHorizontalBarChart from '../../graph/horizontalBar/PurchasesHorizontalBarChart';

const PurchasesGraph: React.FC = () => {
  return (
      <div>
        <h1>Gráfico de Barra Horizontal - Volume de Compras por Fornecedor</h1>
        <PurchasesHorizontalBarChart />
      </div>
  );
};

export default PurchasesGraph;
