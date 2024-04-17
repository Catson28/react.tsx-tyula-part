import React, { useEffect } from 'react';

import AddProduct from './add-product.component';
import ProductsList from './products-list.component';
import Product from './product.component';
import ImgUpdateProduct from './ImgUpdateProduct'; // Importando o componente para upload de imagem de produto
import { useProductState } from '../../../services/utils/productUtils';

const WholeProduct: React.FC = () => {
  const {
    currentProduct,
    showProductForm,
    showProduct,
    showProductsList,
    showImgProduct, // Adicionando o estado para mostrar o componente de upload de imagem de produto
    deletedProductId,
    handleImageProduct,

    setShowProductForm,
    setShowProduct,
    setShowProductsList,
    setShowImgProduct, // Adicionando a função para mostrar o componente de upload de imagem de produto
    handleProductsListClick,
    handleAddProductClick,
    handleEditProduct,
    handleDeleteProduct,
    handleUpdateProduct
  } = useProductState();

  useEffect(() => {
    if (!currentProduct && deletedProductId) {
      setShowProduct(false);
      setShowProductsList(false);
      setShowImgProduct(false); // Escondendo o componente de upload de imagem quando necessário
    }
  }, [currentProduct, deletedProductId, setShowImgProduct]);

  const productsButtonViewText = showImgProduct || showProductForm || showProduct || showProductsList ? "Fechar" : "Abrir";

  return (
      <>
        <div className="btn-toolbar justify-content-between p-2" role="toolbar" aria-label="Toolbar with button groups">
          <h2 id="vertical-variation">Lista de Produtos<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#vertical-variation"></a></h2>
          <button type="button" className="btn btn-primary" onClick={handleProductsListClick}>{productsButtonViewText}</button>
        </div>
        {showProductForm && (
          <AddProduct onClose={() => setShowProductForm(false)} />
        )}
        {showProductsList && (
          <ProductsList onClose={() => setShowProductsList(false)} onEditProduct={handleEditProduct} onImgProduct={handleImageProduct} onAddProductClick={handleAddProductClick} />
        )}
        {showProduct && currentProduct && (
          <Product id={currentProduct.id} onEdit={handleUpdateProduct} onDelete={handleDeleteProduct} />
        )}
        {showImgProduct && currentProduct && (
          <ImgUpdateProduct id={currentProduct.id} /> // Mostrando o componente de upload de imagem de produto quando necessário
        )}
      </>
  );
};

export default WholeProduct;
