import React from 'react';
import InventoryHorizontalBarChart from '../../graph/horizontalBar/InventoryHorizontalBarChart';


const InventoryGraph: React.FC = () => {
  return (
      <div>
        <h1>Gráfico de Barra Horizontal - Quantidade em Estoque por Categoria</h1>
        <InventoryHorizontalBarChart />
      </div>
  );
};

export default InventoryGraph;
