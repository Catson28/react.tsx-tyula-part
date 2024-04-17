import React from 'react';
import HRPayrollDoughnutChart from '../../graph/doughnut/HRPayrollDoughnutChart';

const HRPayrollDoughnutChartParent: React.FC = () => {
  return (
    <div>
      <h1>Gráfico de Rosca - Custos com Folha de Pagamento em Recursos Humanos</h1>
      <HRPayrollDoughnutChart />
    </div>
  );
};

export default HRPayrollDoughnutChartParent;
