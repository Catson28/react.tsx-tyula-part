import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import WholeCategory from '../../partials/category/WholeCategory';
import WholeSubcategory from '../../partials/subcategory/WholeSubcategory';
import WholeProduct from '../../partials/product/WholeProduct';
import WholeService from '../../partials/service/WholeService';
import ComponentSlider from '../../partials/carrocel/ComponentSlider';
import TelaDoNavegador from '../../partials/HelperResposnve/TelaDoNavegador';
import ParentWithDynamicChild from '../../partials/HelperResposnve/ParentWithDynamicChild';
import NavbarComponent from '../../partials/NavbarComponent'
import HomeSale from '../sale/HomeSale';
// import CollButt from '../../../services/utils/CollButt'
import AllGraphs from '../../partials/graficos/AllGraphs'



const AllService: React.FC = () => {


  const clientsData = [
    { id: 1, name: 'Cliente 1', address: 'Endereço 1', contact: '123456789', email: 'cliente1@example.com' },
    { id: 2, name: 'Cliente 2', address: 'Endereço 2', contact: '987654321', email: 'cliente2@example.com' },
    // Outros clientes...
  ];
  
  
  const servicesData = [
    { id: 1, name: 'Serviço 1', description: 'Descrição do Serviço 1', price: '100.00', duration: '2 horas' },
    { id: 2, name: 'Serviço 2', description: 'Descrição do Serviço 2', price: '150.00', duration: '1 hora' },
    // Outros serviços...
  ];
  
  
  const sellersData = [
    { id: 1, name: 'Vendedor 1', position: 'Cargo 1', contact: '987654321' },
    { id: 2, name: 'Vendedor 2', position: 'Cargo 2', contact: '123456789' },
    // Outros vendedores...
  ];
  
  
  const confirmSale = () => {
    // Lógica para confirmar a venda
    console.log('Venda confirmada');
  };
  
  const cancelSale = () => {
    // Lógica para cancelar a venda
    console.log('Venda cancelada');
  };
  
  const components = [<WholeCategory />, <WholeSubcategory />, <WholeProduct />, <WholeService />];
  return (
      <NavbarComponent>
        <div className="container">            
            <ComponentSlider components={components} />
            <WholeCategory />
            <WholeSubcategory />
            <WholeService />
            <WholeProduct />
            <ParentWithDynamicChild />
            <AllGraphs />
            <TelaDoNavegador />
            <HomeSale
              clients={clientsData}
              services={servicesData}
              sellers={sellersData}
              onConfirm={confirmSale}
              onCancel={cancelSale}
            />

            {/* <CollButt /> */}
        </div>        
      </NavbarComponent>

  );
};

export default AllService;
