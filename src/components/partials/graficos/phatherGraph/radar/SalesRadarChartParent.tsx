import React from 'react';
import SalesRadarChart from '../../graph/radar/SalesRadarChart';
import TwoColumnLayout from '../../TwoColumnLayout';

const SalesRadarChartParent: React.FC = () => {
  return (
    <TwoColumnLayout>
      <div>
        <h1>Gráfico de Radar - Competências de Vendas por Vendedor</h1>
        <SalesRadarChart />
      </div>
    </TwoColumnLayout>
  );
};

export default SalesRadarChartParent;
