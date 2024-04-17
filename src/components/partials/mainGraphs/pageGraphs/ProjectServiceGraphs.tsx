import React from 'react';
import TwoColumnLayout from '../TwoColumnLayout';

import ProjectManagementRadarChartParent from '../phatherGraph/radar/ProjectManagementRadarChartParent';
import ProjectActivitiesDistributionGraph from '../phatherGraph/distribution/ProjectActivitiesDistributionGraph';

const AllGraphs: React.FC = () => {
  return (
    <TwoColumnLayout>
            <ProjectManagementRadarChartParent />
            {/* <ProjectActivitiesDistributionGraph /> */}

    </TwoColumnLayout>
  );
};

export default AllGraphs;
