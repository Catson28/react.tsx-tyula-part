import React from 'react';
import AssetManagementDoughnutChart from '../../graph/doughnut/AssetManagementDoughnutChart';

const AssetManagementDoughnutChartParent: React.FC = () => {
  return (
    <div>
      <h4>Custos de Manutenção de Ativos em Gestão de Ativos</h4>
      <AssetManagementDoughnutChart />
    </div>
  );
};

export default AssetManagementDoughnutChartParent;
