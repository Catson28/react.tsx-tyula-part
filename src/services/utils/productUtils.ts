import { useState } from 'react';
import ProductDataService from "../net/ProductDataService";
import IProductData from "./../types/product.type";

export const useProductState = () => {
  const [currentProduct, setCurrentProduct] = useState<IProductData | null>(null);
  const [showProductForm, setShowProductForm] = useState<boolean>(false);
  const [showProduct, setShowProduct] = useState<boolean>(false);
  const [showImgProduct, setShowImgProduct] = useState<boolean>(false);
  const [showListProducts, setShowListProducts] = useState<boolean>(false);
  const [deletedProductId, setDeletedProductId] = useState<string | null>(null);
  const [showAddServiceProduct, setShowAddServiceProduct] = useState<boolean>(false);
  const [showListServiceProduct, setShowListServiceProduct] = useState<boolean>(false);
  const [showProductsList, setShowProductsList] = useState<boolean>(false); // New state
  

  const handleProductClose = () => {
    setShowProductForm(false);
    setShowListProducts(false);
    setShowProduct(false);
    setShowImgProduct(false);
    setShowAddServiceProduct(false);
    setShowListServiceProduct(false);
    setShowProductsList(false); // Reset the state when closing
  };

  const handleListProductsClick = () => {
    if (showListProducts) {
      handleProductClose();
    } else {
      handleProductClose();
      setShowListProducts(true);
      setShowProductsList(true); // Set the state when opening the list
    }
  };

  const handleAddProductClick = () => {
    if (showProductForm) {
      handleProductClose();
    } else {
      handleProductClose();
      setShowProductForm(true);
    }
  };

  const handleEditProduct = (product: IProductData) => {
    if (product) {
      setCurrentProduct(product);
      handleProductClose();
      setShowProduct(true);
    }
  };

  const handleAddServiceProduct = (product: IProductData) => {
    if (product) {
      setCurrentProduct(product);
      handleProductClose();
      setShowAddServiceProduct(true);
    }
  };

  const handleListServiceProduct = (product: IProductData) => {
    if (product) {
      setCurrentProduct(product);
      handleProductClose();
      setShowListServiceProduct(true);
    }
  };

  const handleImageProduct = (product: IProductData) => {
    if (product) {
      setCurrentProduct(product);
      handleProductClose();
      setShowImgProduct(true);
    }
  };

  const handleDeleteProduct = (productId: string) => {
    ProductDataService.delete(productId)
      .then((response: any) => {
        handleProductClose();
        setDeletedProductId(productId);
        setCurrentProduct(null);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const handleUpdateProduct = (updatedProduct: IProductData) => {
    ProductDataService.update(updatedProduct, updatedProduct.id)
      .then((response: any) => {
        handleProductClose();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return {
    currentProduct,
    showProductForm,
    showProduct,
    showListProducts,
    deletedProductId,
    showImgProduct,
    showAddServiceProduct,
    showListServiceProduct,
    showProductsList,
    setShowProductsList,
    handleProductsListClick: handleListProductsClick, // Rename the function for consistency
    
    setShowProductForm,
    setShowProduct,
    setShowListProducts,
    setShowImgProduct,
    handleListProductsClick,
    handleAddProductClick,
    handleEditProduct,
    handleAddServiceProduct,
    handleListServiceProduct,
    handleImageProduct,
    handleDeleteProduct,
    handleUpdateProduct
  };
};
