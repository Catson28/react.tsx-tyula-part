
import React from 'react';
import TwoColumnLayout from '../TwoColumnLayout';
import PurchasesGraph from '../phatherGraph/bar/PurchasesGraph';
import PurchasesGraphParent from '../phatherGraph/horizontalBar/PurchasesGraphParent';



const AllGraphs: React.FC = () => {
  return (
    <TwoColumnLayout>
            <PurchasesGraph />
            <PurchasesGraphParent />
    </TwoColumnLayout>
  );
};

export default AllGraphs;
