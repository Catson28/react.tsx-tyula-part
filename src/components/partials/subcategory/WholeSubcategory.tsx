import React, { useEffect } from 'react';

import AddSubcategory from './add-subcategory.component';
import SubcategoriesList from './subcategories-list.component'; // Importando o componente de listagem de subcategorias
import Subcategory from './subcategory.component'; // Importando o componente de exibição de subcategoria
import { useSubcategoryState } from '../../../services/utils/subcategoryUtils'; // Importando o hook de estado para subcategorias

const WholeSubcategory: React.FC = () => {
  const {
    currentSubcategory,
    showSubcategoryForm,
    showSubcategory,
    showSubcategoriesList,
    deletedSubcategoryId,

    setShowSubcategoryForm, // Adicionando as funções de configuração ao objeto de retorno
    setShowSubcategory,
    setShowSubcategoriesList,
    handleSubcategoriesListClick,
    handleAddSubcategoryClick,
    handleEditSubcategory,
    handleDeleteSubcategory,
    handleUpdateSubcategory
  } = useSubcategoryState();

  useEffect(() => {
    if (!currentSubcategory && deletedSubcategoryId) {
      setShowSubcategory(false);
      setShowSubcategoriesList(false);
    }
  }, [currentSubcategory, deletedSubcategoryId]);

  const subcategoriesButtonViewText = showSubcategory || showSubcategoriesList || showSubcategoryForm ? "Fechar" : "Abrir";

  return (
      <>
        <div className="btn-toolbar justify-content-between p-2" role="toolbar" aria-label="Toolbar with button groups">
          <h2 id="vertical-variation">Lista de Subcategorias<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#vertical-variation"></a></h2>
          <button type="button" className="btn btn-primary" onClick={handleSubcategoriesListClick}>{subcategoriesButtonViewText}</button>
        </div>
        {showSubcategoryForm && (
          <AddSubcategory onClose={() => setShowSubcategoryForm(false)} />
        )}
        {showSubcategoriesList && (
          <SubcategoriesList onClose={() => setShowSubcategoriesList(false)} onEditSubcategory={handleEditSubcategory}  onAddSubcategoryClick={handleAddSubcategoryClick}/>
        )}
        {showSubcategory && currentSubcategory && (
          <Subcategory id={currentSubcategory.id} onEdit={handleUpdateSubcategory} onDelete={handleDeleteSubcategory} />
        )}
      </>
  );
};

export default WholeSubcategory;
