import React from 'react';
import GraphSales from '../../components/pages/graph/GraphSales';
import GraphPurchaseSuppliers from '../../components/pages/graph/GraphPurchaseSuppliers';
import GraphProjectService from '../../components/pages/graph/GraphProjectService';
import GraphCustomersRelationship from '../../components/pages/graph/GraphCustomersRelationship';
import GraphMarketingPromotions from '../../components/pages/graph/GraphMarketingPromotions';
import GraphAssetManagement from '../../components/pages/graph/GraphAssetManagement';

const GraphRoutes = [
  {
    path: '/graph/sales',
    element: <GraphSales />,
  },
  {
    path: '/graph/purchases-suppliers',
    element: <GraphPurchaseSuppliers />,
  },
  {
    path: '/graph/project-service',
    element: <GraphProjectService />,
  },
  {
    path: '/graph/customer-relationship',
    element: <GraphCustomersRelationship />,
  },
  {
    path: '/graph/marketing-promotions',
    element: <GraphMarketingPromotions />,
  },
  {
    path: '/graph/asset-management',
    element: <GraphAssetManagement />,
  },
  // outras rotas relacionadas a vendas
];

export default GraphRoutes;

