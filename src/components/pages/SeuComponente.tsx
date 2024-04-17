import React from 'react';
import Body from '../partials/Body';
import { CrudProvider } from '../../services/context/CrudContext'; // Ajuste a importação aqui
import CrudForm from '../partials/CrudForm';
import CrudList from '../partials/CrudList';

const SeuComponente: React.FC = () => {
  return (
    <CrudProvider>
      <div> {/* Use uma tag que aceite children */}
        <Body>
          <CrudForm />
          <CrudList />
        </Body>
      </div>
    </CrudProvider>
  );
};

export default SeuComponente;