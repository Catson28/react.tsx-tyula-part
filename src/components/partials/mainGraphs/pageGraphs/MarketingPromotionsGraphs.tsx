import React from 'react';
import TwoColumnLayout from '../TwoColumnLayout';
import MarketingPieChartParent from '../phatherGraph/pie/MarketingPieChartParent';
import MarketingROIComparisonGraph from '../phatherGraph/scatter/MarketingROIComparisonGraph'; //

const AllGraphs: React.FC = () => {
  return (
    <TwoColumnLayout>
            <MarketingPieChartParent />
            <MarketingROIComparisonGraph />

    </TwoColumnLayout>
  );
};

export default AllGraphs;
