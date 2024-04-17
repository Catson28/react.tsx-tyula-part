import React from 'react';
import InventoryHorizontalBarChart from '../../graph/horizontalBar/InventoryHorizontalBarChart';

const InventoryGraphParent: React.FC = () => {
  return (
      <div>
        <h4>Quantidade em Estoque por Categoria</h4>
        <InventoryHorizontalBarChart />
      </div>
  );
};

export default InventoryGraphParent;
