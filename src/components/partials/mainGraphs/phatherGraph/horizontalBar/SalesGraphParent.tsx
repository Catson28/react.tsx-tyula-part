import React from 'react';

import SalesHorizontalBarChart from '../../graph/horizontalBar/SalesHorizontalBarChart';

const SalesGraphParent: React.FC = () => {
  return (
      <div>
        <h4>Vendas por Vendedor</h4>
        <SalesHorizontalBarChart />
      </div>
  );
};

export default SalesGraphParent;
