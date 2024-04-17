import React from 'react';
import MultiLineChart from '../../graph/line/MultiLineChart';

const CostComparisonGraph: React.FC = () => {
  // Dados de exemplo para comparar custos ao longo do tempo
  const costData = [
    { label: 'Custo A', data: [100, 150, 120, 200, 180] },
    { label: 'Custo B', data: [80, 120, 110, 190, 160] },
    { label: 'Custo C', data: [120, 130, 140, 160, 170] },
  ];

  const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'];

  return (
      <div>
        <h1>Gráfico de Linhas Múltiplas - Comparação de Custos ao Longo do Tempo</h1>
        <MultiLineChart datasets={costData} labels={labels} />
      </div>
  );
};

export default CostComparisonGraph;
