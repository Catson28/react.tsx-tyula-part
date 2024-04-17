import React from 'react';
import HRPayrollDoughnutChart from '../../graph/doughnut/HRPayrollDoughnutChart';

const HRPayrollDoughnutChartParent: React.FC = () => {
  return (
    <div>
      <h4>Custos com Folha de Pagamento em Recursos Humanos</h4>
      <HRPayrollDoughnutChart />
    </div>
  );
};

export default HRPayrollDoughnutChartParent;
