import React from 'react';
import RadarChart from '../../graph/radar/RadarChart';
import TwoColumnLayout from '../../TwoColumnLayout';

const SalesSkillsGraph: React.FC = () => {
  // Dados de exemplo para visualizar competências de vendas
  const salesSkillsData = [
    { label: 'Prospecção', data: [8, 9, 7, 8, 9] },
    { label: 'Fechamento de Negócios', data: [9, 8, 7, 9, 8] },
    { label: 'Atendimento ao Cliente', data: [7, 8, 9, 7, 8] },
  ];

  const labels = ['Vendedor A', 'Vendedor B', 'Vendedor C', 'Vendedor D', 'Vendedor E'];

  return (
    <TwoColumnLayout>
      <div>
        <h4>Competências de Vendas por Vendedor</h4>
        <RadarChart datasets={salesSkillsData} labels={labels} />
      </div>
    </TwoColumnLayout>
  );
};

export default SalesSkillsGraph;
