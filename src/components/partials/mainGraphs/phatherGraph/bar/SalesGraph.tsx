import React from 'react';
import SalesBarChart from '../../graph/bar/SalesBarChart';

const SalesGraph: React.FC = () => {
  return (
      <div>
        <h4>Vendas por Vendedor</h4>
        <SalesBarChart />
      </div>
  );
};

export default SalesGraph;
