import React from 'react';
import SalesRadarChart from '../../graph/radar/SalesRadarChart';
import TwoColumnLayout from '../../TwoColumnLayout';

const SalesRadarChartParent: React.FC = () => {
  return (
    <TwoColumnLayout>
      <div>
        <h4>Competências de Vendas por Vendedor</h4>
        <SalesRadarChart />
      </div>
    </TwoColumnLayout>
  );
};

export default SalesRadarChartParent;
