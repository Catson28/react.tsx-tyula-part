import { useState } from 'react';
import SubcategoryDataService from "../net/SubcategoryDataService";
import ISubcategoryData from "./../types/subcategory.type";

export const useSubcategoryState = () => {
  const [currentSubcategory, setCurrentSubcategory] = useState<ISubcategoryData | null>(null);
  const [showSubcategoryForm, setShowSubcategoryForm] = useState<boolean>(false);
  const [showSubcategory, setShowSubcategory] = useState<boolean>(false);
  const [showSubcategoriesList, setShowSubcategoriesList] = useState<boolean>(false);
  const [deletedSubcategoryId, setDeletedSubcategoryId] = useState<string | null>(null);

  const handleSubcategoryClose = () => {
    setShowSubcategoryForm(false);
    setShowSubcategoriesList(false);
    setShowSubcategory(false);
  };

  const handleSubcategoriesListClick = () => {
    if (showSubcategoriesList) {
      handleSubcategoryClose();
    } else {
      handleSubcategoryClose();
      setShowSubcategoriesList(true);
    }
  };
  
  const handleAddSubcategoryClick = () => {
      if (showSubcategoryForm) {
        handleSubcategoryClose();
      } else {
        handleSubcategoryClose();
        setShowSubcategoryForm(true);
      }
  };

  const handleEditSubcategory = (subcategory: ISubcategoryData) => {
    if (subcategory) {
      setCurrentSubcategory(subcategory);
      handleSubcategoryClose();
      setShowSubcategory(true);
    }
  };
  
  const handleDeleteSubcategory = (subcategoryId: string) => {
    SubcategoryDataService.delete(subcategoryId)
      .then((response: any) => {
        handleSubcategoryClose();
        setDeletedSubcategoryId(subcategoryId);
        setCurrentSubcategory(null);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const handleUpdateSubcategory = (updatedSubcategory: ISubcategoryData) => {
    SubcategoryDataService.update(updatedSubcategory, updatedSubcategory.id)
      .then((response: any) => {
        // setCurrentSubcategory(currentSubcategory);
        handleSubcategoryClose();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return {
    currentSubcategory,
    showSubcategoryForm,
    showSubcategory,
    showSubcategoriesList,
    deletedSubcategoryId,
    setShowSubcategoryForm,
    setShowSubcategory,
    setShowSubcategoriesList,
    handleSubcategoriesListClick,
    handleAddSubcategoryClick,
    handleEditSubcategory,
    handleDeleteSubcategory,
    handleUpdateSubcategory
  };
};
