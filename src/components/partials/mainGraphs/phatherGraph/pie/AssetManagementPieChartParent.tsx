import React from 'react';
import AssetManagementPieChart from '../../graph/pie/AssetManagementPieChart';

const AssetManagementPieChartParent: React.FC = () => {
  return (
    <div>
      <h4>Distribuição dos Ativos em Gestão de Ativos</h4>
      <AssetManagementPieChart />
    </div>
  );
};

export default AssetManagementPieChartParent;
