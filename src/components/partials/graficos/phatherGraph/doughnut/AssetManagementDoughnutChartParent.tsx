import React from 'react';
import AssetManagementDoughnutChart from '../../graph/doughnut/AssetManagementDoughnutChart';

const AssetManagementDoughnutChartParent: React.FC = () => {
  return (
    <div>
      <h1>Gráfico de Rosca - Custos de Manutenção de Ativos em Gestão de Ativos</h1>
      <AssetManagementDoughnutChart />
    </div>
  );
};

export default AssetManagementDoughnutChartParent;
