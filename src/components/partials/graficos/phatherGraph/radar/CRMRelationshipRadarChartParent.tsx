import React from 'react';
import CRMRelationshipRadarChart from '../../graph/radar/CRMRelationshipRadarChart';
import TwoColumnLayout from '../../TwoColumnLayout';

const CRMRelationshipRadarChartParent: React.FC = () => {
  return (
    <TwoColumnLayout>
      <div>
        <h1>Gráfico de Radar - Satisfação dos Clientes em Diferentes Aspectos</h1>
        <CRMRelationshipRadarChart />
      </div>
    </TwoColumnLayout>
  );
};

export default CRMRelationshipRadarChartParent;
