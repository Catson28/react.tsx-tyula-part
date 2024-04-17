import React from 'react';
import LineChart from '../../graph/line/LineChart';

const Graphs: React.FC = () => {
  // Função para gerar dados de vendas ao longo do tempo
  const generateSalesData = (): { data: number[]; labels: string[] } => {
    const startDate = new Date(2022, 0, 1); // Janeiro de 2022
    const endDate = new Date(2022, 11, 31); // Dezembro de 2022
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const salesData: number[] = [];
    const labels: string[] = [];

    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      const monthIndex = currentDate.getMonth();
      const monthName = months[monthIndex];
      labels.push(`${monthName} ${currentDate.getFullYear()}`);

      // Gerar dados de vendas hipotéticos (valores aleatórios entre 100 e 1000)
      const salesAmount = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
      salesData.push(salesAmount);

      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return { data: salesData, labels };
  };

  // Gerar dados de vendas ao longo do tempo
  const { data, labels } = generateSalesData();

  return (

        <div>
            <h1>Gráfico de Linha - Evolução das Vendas</h1>
            <LineChart data={data} labels={labels} />
        </div>
  );
};

export default Graphs;
