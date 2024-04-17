import React from 'react';
import InventoryHorizontalBarChart from '../../graph/horizontalBar/InventoryHorizontalBarChart';


const InventoryGraph: React.FC = () => {
  return (
      <div>
        <h4>Quantidade em Estoque por Categoria</h4>
        <InventoryHorizontalBarChart />
      </div>
  );
};

export default InventoryGraph;
