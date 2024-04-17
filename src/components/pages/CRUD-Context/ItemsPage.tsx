import React from 'react';
import Body from '../../partials/Body';
import { CrudProvider } from '../../../services/context/CrudContext'; // Ajuste a importação aqui
import ItemList from '../../partials/CRUD-Context/ItemList';
import NavbarComponent from '../../partials/NavbarCompone'

const ItemsPage: React.FC = () => {
  return (
      <NavbarComponent>
        <CrudProvider>
          <Body>
            <ItemList />
          </Body>
        </CrudProvider>
     </NavbarComponent> 
  );
};

export default ItemsPage;
