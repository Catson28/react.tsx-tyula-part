import React from 'react';
import MarketingPieChart from '../../graph/pie/MarketingPieChart';

const MarketingPieChartParent: React.FC = () => {
  return (
    <div>
      <h1>Gráfico de Pizza - Participação de Mercado em Marketing e Promoções</h1>
      <MarketingPieChart />
    </div>
  );
};

export default MarketingPieChartParent;
