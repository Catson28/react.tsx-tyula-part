import React from 'react';
import CRMRelationshipRadarChart from '../../graph/radar/CRMRelationshipRadarChart';
import TwoColumnLayout from '../../TwoColumnLayout';

const CRMRelationshipRadarChartParent: React.FC = () => {
  return (
    <TwoColumnLayout>
      <div>
        <h4>Satisfação dos Clientes em Diferentes Aspectos</h4>
        <CRMRelationshipRadarChart />
      </div>
    </TwoColumnLayout>
  );
};

export default CRMRelationshipRadarChartParent;
