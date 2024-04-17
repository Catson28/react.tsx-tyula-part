import React from 'react';
import MarketingPieChart from '../../graph/pie/MarketingPieChart';

const MarketingPieChartParent: React.FC = () => {
  return (
    <div>
      <h4>Participação de Mercado em Marketing e Promoções</h4>
      <MarketingPieChart />
    </div>
  );
};

export default MarketingPieChartParent;
