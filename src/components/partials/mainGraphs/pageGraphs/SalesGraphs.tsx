import React from 'react';
import SalesComparisonGraph from '../phatherGraph/bar/SalesComparisonGraph';
import TwoColumnLayout from '../TwoColumnLayout';
import SalesGraph from '../phatherGraph/bar/SalesGraph';
import SalesGraphParent from '../phatherGraph/horizontalBar/SalesGraphParent';
import SalesRadarChartParent from '../phatherGraph/radar/SalesRadarChartParent';
import SalesSkillsGraph from '../phatherGraph/radar/SalesSkillsGraph';
import Graphs from '../phatherGraph/line/Graphs';

const AllGraphs: React.FC = () => {
  return (
    <TwoColumnLayout>
            <Graphs />
            <SalesComparisonGraph
            data={[200, 300, 400, 500, 600]} // Exemplo de dados de vendas para diferentes produtos
            labels={['Produto A', 'Produto B', 'Produto C', 'Produto D', 'Produto E']} // Exemplo de rótulos para produtos
            />
            <SalesGraph />
            <SalesGraphParent />
            <SalesRadarChartParent />
            <SalesSkillsGraph />

    </TwoColumnLayout>
  );
};

export default AllGraphs;
