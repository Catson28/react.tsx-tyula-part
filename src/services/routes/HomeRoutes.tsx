import HomePage from '../../components/pages/AllRoutes/HomePage';
import ItemsPage from '../../components/pages/CRUD-Context/ItemsPage';
import HomeContextPage from '../../components/pages/HomeContextPage';
import LumeIt from '../../components/pages/LumeIt';
import SaleBeauty from '../../components/pages/SaleBeauty';
import TestAllBeauty from '../../components/pages/Services/AllService';
import Palavras from '../../components/pages/Palavras/Palavras';
import NavbarComponent from '../../components/partials/NavbarCompone';
import Table1 from '../../components/pages/Table/Table1';
import TableService from '../../components/pages/Table/TableService';
import TableServiceProvider from '../../components/pages/Table/TableServiceProvider';
import TableServiceSoldItems from '../../components/pages/Table/TableServiceSoldItems';
import AllGraphs from '../../components/partials/graficos/AllGraphs';
import HomeSale from '../../components/pages/sale/partSale';

const HomeRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  // outras rotas relacionadas à página inicial

  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/lumeIT',
    element: <LumeIt />,
  }, 
  {
    path: '/Context',
    element: <HomeContextPage />,
  }, 
  {
    path: '/items',
    element: <ItemsPage />,
  },
  {
    path: '/sale',
    element: <HomeSale />,
  }, 
  {
    path: '/beauty',
    element: <SaleBeauty />,
  },
  {
    path: '/services',
    element: <TestAllBeauty />,
  },
  {
    path: '/estilo',
    element: <NavbarComponent />,
  },
  {
    path: '/sales-reports',
    element: <Table1 />,
  },
  {
    path: '/inventory-control',
    element: <TableService />,
  },
  {
    path: '/products',
    element: <TableServiceSoldItems />,
  },
  {
    path: '/graficos',
    element: <AllGraphs />,
  },
  {
    path: '/employees',
    element: <TableServiceProvider />,
  },
  {
    path: '/palavras',
    element: <Palavras  />,
  }
];

export default HomeRoutes;

