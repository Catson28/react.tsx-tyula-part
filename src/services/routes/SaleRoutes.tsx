import React from 'react';
import HomeSale from '../../components/pages/sale/partSale';
import SaleBeauty from '../../components/pages/SaleBeauty';

const SaleRoutes = [
  {
    path: '/sale',
    element: <HomeSale />,
  },
  {
    path: '/beauty',
    element: <SaleBeauty />,
  },
  // outras rotas relacionadas a vendas
];

export default SaleRoutes;
