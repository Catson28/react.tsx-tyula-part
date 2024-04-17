import React, { useEffect } from 'react';

import AddCategory from './add-category.component';
import CategoriesList from './CategoriesList';
import CategoryEdit from './CategoryEdit';
import { useCategoryState } from '../../../services/utils/categoryUtils';
import ImgUpdateCategory from './ImgUpdateCategory';

const WholeCategory: React.FC = () => {
  const {
    currentCategory,
    showCategoryForm,
    showCategory,
    showImgCategory,
    showCategoriesList,
    deletedCategoryId,

    setShowCategoryForm, // Adicione as funções de configuração ao objeto de retorno
    setShowCategory,
    setShowImgCategory,
    setShowCategoriesList,
    handleCategoriesListClick,
    handleAddCategoryClick,
    handleEditCategory,
    handleImageCategory,
    handleDeleteCategory,
    handleUpdateCategory,
    categoriesButtonViewText,
    categoriesButtonAddText
  } = useCategoryState();

  useEffect(() => {
    if (!currentCategory && deletedCategoryId) {
      setShowCategory(false);
      setShowCategoriesList(false);
    }
  }, [currentCategory, deletedCategoryId]);


  return (
      <>
        <div className="btn-toolbar justify-content-between p-2" role="toolbar" aria-label="Toolbar with button groups">
          <h2 id="vertical-variation">Lista de Categorias<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#vertical-variation"></a></h2>
          <button type="button" className="btn btn-primary" onClick={handleCategoriesListClick}>{categoriesButtonViewText}</button>
        </div>
        {showCategoryForm && (
          <AddCategory onClose={() => setShowCategoryForm(false)} />
        )}
        {showCategoriesList && (
          <CategoriesList onClose={() => setShowCategoriesList(false)}  onEditCategory={handleEditCategory} onImgCategory={handleImageCategory}  onCategoriesListClick={handleCategoriesListClick} />
        )}
        {showCategory && currentCategory && (
          <CategoryEdit id={currentCategory.id} onEdit={handleUpdateCategory}  onDelete={handleDeleteCategory} />
        )}
        {showImgCategory && currentCategory && (
          <ImgUpdateCategory id={currentCategory.id}  />
        )}

      </>
  );
};

export default WholeCategory;
