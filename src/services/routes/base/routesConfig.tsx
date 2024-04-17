import { RouteProps } from 'react-router-dom';
import React from 'react';
import HomeRoutes from '../HomeRoutes';
import SaleRoutes from '../SaleRoutes';
import ServiceRoutes from '../ServiceRoutes';
import GraphRoutes from '../GraphRoutes';

// import outros arquivos de rota conforme necessário

interface RouteConfigBase {
  path: string;
  element: React.ReactNode;
}

type RouteConfig = RouteProps & RouteConfigBase;

const routes: RouteConfig[] = [
  ...HomeRoutes,
  ...SaleRoutes,
  ...ServiceRoutes,
  ...GraphRoutes,
  // outras rotas importadas conforme necessário
];

export default routes;
