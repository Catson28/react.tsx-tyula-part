import React from 'react';
import CostComparisonGraph from '../phatherGraph/line/CostComparisonGraph';
import TwoColumnLayout from '../TwoColumnLayout';
import InventoryGraph from '../phatherGraph/bar/InventoryGraph';
import FinancialGraph from '../phatherGraph/bar/FinancialGraph';
import InventoryGraphParent from '../phatherGraph/horizontalBar/InventoryGraphParent';
import FinancialGraphParent from '../phatherGraph/horizontalBar/FinancialGraphParent';
import FinancialPieChartParent from '../phatherGraph/pie/FinancialPieChartParent';
import AssetManagementPieChartParent from '../phatherGraph/pie/AssetManagementPieChartParent';
import HRPayrollDoughnutChartParent from '../phatherGraph/doughnut/HRPayrollDoughnutChartParent';
import AssetManagementDoughnutChartParent from '../phatherGraph/doughnut/AssetManagementDoughnutChartParent';
import PayrollBenefitsGraph from '../phatherGraph/scatter/PayrollBenefitsGraph'; //
import ExpenseDistributionGraph from '../phatherGraph/pie/ExpenseDistributionGraph';
import HRBenefitsDistributionGraph from '../phatherGraph/distribution/HRBenefitsDistributionGraph';

const AllGraphs: React.FC = () => {
  return (
    <TwoColumnLayout>
        <CostComparisonGraph />
        <InventoryGraph />
        <FinancialGraph />
        <InventoryGraphParent />
        <FinancialGraphParent />
        <FinancialPieChartParent />
        <AssetManagementPieChartParent />
        <HRPayrollDoughnutChartParent />
        <AssetManagementDoughnutChartParent />
        <ExpenseDistributionGraph />
        <HRBenefitsDistributionGraph />
        <PayrollBenefitsGraph />
    </TwoColumnLayout>
  );
};

export default AllGraphs;
