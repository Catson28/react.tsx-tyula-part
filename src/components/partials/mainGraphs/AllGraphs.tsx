import React from 'react';
import Graphs from './phatherGraph/line/Graphs';
import SalesComparisonGraph from './phatherGraph/bar/SalesComparisonGraph';
import CostComparisonGraph from './phatherGraph/line/CostComparisonGraph';
import TwoColumnLayout from './TwoColumnLayout';

import SalesGraph from './phatherGraph/bar/SalesGraph';
import PurchasesGraph from './phatherGraph/bar/PurchasesGraph';
import InventoryGraph from './phatherGraph/bar/InventoryGraph';
import FinancialGraph from './phatherGraph/bar/FinancialGraph';

import SalesGraphParent from './phatherGraph/horizontalBar/SalesGraphParent';
import PurchasesGraphParent from './phatherGraph/horizontalBar/PurchasesGraphParent';
import InventoryGraphParent from './phatherGraph/horizontalBar/InventoryGraphParent';
import FinancialGraphParent from './phatherGraph/horizontalBar/FinancialGraphParent';

import SalesRadarChartParent from './phatherGraph/radar/SalesRadarChartParent';
import ProjectManagementRadarChartParent from './phatherGraph/radar/ProjectManagementRadarChartParent';
import CRMRelationshipRadarChartParent from './phatherGraph/radar/CRMRelationshipRadarChartParent';


import FinancialPieChartParent from './phatherGraph/pie/FinancialPieChartParent';
import MarketingPieChartParent from './phatherGraph/pie/MarketingPieChartParent';
import AssetManagementPieChartParent from './phatherGraph/pie/AssetManagementPieChartParent';


import HRPayrollDoughnutChartParent from './phatherGraph/doughnut/HRPayrollDoughnutChartParent';
import AssetManagementDoughnutChartParent from './phatherGraph/doughnut/AssetManagementDoughnutChartParent';

import PayrollBenefitsGraph from './phatherGraph/scatter/PayrollBenefitsGraph'; //
import MarketingROIComparisonGraph from './phatherGraph/scatter/MarketingROIComparisonGraph'; //

import SalesSkillsGraph from './phatherGraph/radar/SalesSkillsGraph';
import ExpenseDistributionGraph from './phatherGraph/pie/ExpenseDistributionGraph';
import HRBenefitsDistributionGraph from './phatherGraph/distribution/HRBenefitsDistributionGraph';
import ProjectActivitiesDistributionGraph from './phatherGraph/distribution/ProjectActivitiesDistributionGraph';

const AllGraphs: React.FC = () => {
  return (
    <TwoColumnLayout>
            <Graphs />
            <SalesComparisonGraph
            data={[200, 300, 400, 500, 600]} // Exemplo de dados de vendas para diferentes produtos
            labels={['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E']} // Exemplo de rótulos para produtos
            />
            <CostComparisonGraph />


            <SalesGraph />
            <PurchasesGraph />
            <InventoryGraph />
            <FinancialGraph />

            <SalesGraphParent />
            <PurchasesGraphParent />
            <InventoryGraphParent />
            <FinancialGraphParent />

            <SalesRadarChartParent />
            <ProjectManagementRadarChartParent />
            <CRMRelationshipRadarChartParent />


            <FinancialPieChartParent />
            <MarketingPieChartParent />
            <AssetManagementPieChartParent />

            <HRPayrollDoughnutChartParent />
            <AssetManagementDoughnutChartParent />
            
            
            <SalesSkillsGraph />
            <ExpenseDistributionGraph />
            <HRBenefitsDistributionGraph />
            <ProjectActivitiesDistributionGraph />

            <PayrollBenefitsGraph />
            <MarketingROIComparisonGraph />

    </TwoColumnLayout>
  );
};

export default AllGraphs;
