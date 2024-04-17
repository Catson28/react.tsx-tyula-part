import React from 'react';
import SalesHorizontalBarChart from '../../graph/horizontalBar/SalesHorizontalBarChart';

const SalesGraph: React.FC = () => {
  return (
      <div>
        <h1>Gráfico de Barra Horizontal - Vendas por Vendedor</h1>
        <SalesHorizontalBarChart />
      </div>
  );
};

export default SalesGraph;
