import React from 'react';
import ScatterChart from './ScatterChart';
import TwoColumnLayout from '../../TwoColumnLayout';

const MarketingROIComparisonGraph: React.FC = () => {
  // Dados de exemplo para mostrar relação entre investimento em marketing e ROI
  const marketingData = [
    { x: 100, y: 200 },
    { x: 150, y: 250 },
    { x: 200, y: 300 },
    { x: 250, y: 350 },
    { x: 300, y: 400 },
  ];

  return (
    <TwoColumnLayout>
      <div>
        <h4>Gráfico de Dispersão - Relação entre Investimento em Marketing e ROI</h4>
        <ScatterChart data={marketingData} />
      </div>
    </TwoColumnLayout>
  );
};

export default MarketingROIComparisonGraph;
