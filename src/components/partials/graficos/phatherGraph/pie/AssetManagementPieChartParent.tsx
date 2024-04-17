import React from 'react';
import AssetManagementPieChart from '../../graph/pie/AssetManagementPieChart';

const AssetManagementPieChartParent: React.FC = () => {
  return (
    <div>
      <h1>Gráfico de Pizza - Distribuição dos Ativos em Gestão de Ativos</h1>
      <AssetManagementPieChart />
    </div>
  );
};

export default AssetManagementPieChartParent;
