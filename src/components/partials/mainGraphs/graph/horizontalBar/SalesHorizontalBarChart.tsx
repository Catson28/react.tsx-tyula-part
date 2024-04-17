

/*
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {  ChartOptions } from 'chart.js';

const SalesHorizontalBarChart: React.FC = () => {
  const data = {
    labels: ['Vendedor A', 'Vendedor B', 'Vendedor C', 'Vendedor D', 'Vendedor E'],
    datasets: [
      {
        label: 'Vendas',
        data: [50000, 60000, 45000, 70000, 55000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        // Definindo a orientação como horizontal
        barThickness: 15, // Espessura das barras
        categoryPercentage: 0.5, // Porcentagem da largura da categoria
        barPercentage: 0.9, // Porcentagem da largura das barras
        xAxisID: 'horizontalBar', // ID para o eixo horizontal
        yAxisID: 'verticalBar', // ID para o eixo vertical
      },
    ],
  };


  const options: ChartOptions<'bar'> = {
    indexAxis: 'y' as const, // Definindo o tipo do eixo como 'y'
    scales: {
      x: {
        beginAtZero: true,
      },
      horizontalBar: { // Configurações do eixo horizontal
        type: 'linear', // Tipo do eixo
        position: 'left', // Posição do eixo
      },
      verticalBar: { // Configurações do eixo vertical
        type: 'category', // Tipo do eixo
        position: 'bottom', // Posição do eixo
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesHorizontalBarChart;
 */

/*

import React from 'react';
import { Bar } from 'react-chartjs-2';

const SalesHorizontalBarChart: React.FC = () => {
  const data = {
    labels: ['Vendedor A', 'Vendedor B', 'Vendedor C', 'Vendedor D', 'Vendedor E'],
    datasets: [
      {
        label: 'Vendas',
        data: [50000, 60000, 45000, 70000, 55000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesHorizontalBarChart;


*/



/**


 */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {  ChartOptions } from 'chart.js';

const SalesHorizontalBarChart: React.FC = () => {
  const data = {
    labels: ['Vendedor A', 'Vendedor B', 'Vendedor C', 'Vendedor D', 'Vendedor E'],
    datasets: [
      {
        label: 'Vendas',
        data: [50000, 60000, 45000, 70000, 55000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y' as const, // Definindo o tipo do eixo como 'y'
    scales: {
      x: {
        beginAtZero: true,
      },
      horizontalBar: { // Configurações do eixo horizontal
        type: 'linear', // Tipo do eixo
        position: 'left', // Posição do eixo
      },
      verticalBar: { // Configurações do eixo vertical
        type: 'category', // Tipo do eixo
        position: 'bottom', // Posição do eixo
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SalesHorizontalBarChart;