import React, { useEffect } from 'react';

import AddService from './AddService';
import ListServices from './ListServices';
import Service from './EditService';
import ImgUpdateService from './ImgUpdateService';
import AddProductService from './AddProductService';
import ListProductService from './ListProductServices';
import { useServiceState } from '../../../services/utils/serviceUtils';

const WholeService: React.FC = () => {
  const {
    currentService,
    showServiceForm,
    showService,
    showListServices,
    deletedServiceId,
    showImgService,
    showAddProductService,
    showListProductService,

    setShowServiceForm,
    setShowService,
    setShowListServices,
    handleListServicesClick,
    handleAddServiceClick,
    handleEditService,
    handleAddProductService,
    handleListProductService,
    handleImageService,
    handleDeleteService,
    handleUpdateService
  } = useServiceState();

  useEffect(() => {
    if (!currentService && deletedServiceId) {
      setShowService(false);
      setShowListServices(false);
    }
  }, [currentService, deletedServiceId]);

  // const servicesButtonViewText = showService || showListServices ? "Fechar" : "Abrir";
  const servicesButtonViewText = showServiceForm || showListServices || showService || showImgService || showListProductService || showAddProductService ? "Fechar" : "Abrir";

  return (
    <>
      <div className="btn-toolbar justify-content-between p-2" role="toolbar" aria-label="Toolbar with button groups">
        <h2 id="vertical-variation">Lista de Servicos<a className="anchorjs-link " aria-label="Anchor" data-anchorjs-icon="#" href="#vertical-variation"></a></h2>
        <button type="button" className="btn btn-primary" onClick={handleListServicesClick}>{servicesButtonViewText}</button>
      </div>
      {showServiceForm && (
        <AddService onClose={() => setShowServiceForm(false)} />
      )}
      {showListServices && (
        <ListServices onClose={() => setShowListServices(false)} onEditService={handleEditService} onImgService={handleImageService} onListProductService={handleListProductService} onAddServiceClick={handleAddServiceClick} />
      )}
      {showService && currentService && (
        <Service id={currentService.id.toString()} onEdit={handleUpdateService} onDelete={handleDeleteService} />
      )}
      
      {showImgService && currentService && (
        <ImgUpdateService id={currentService.id}  />
      )}
      
      {showListProductService && currentService && (
        <ListProductService id={currentService.id} onAddProductService={handleAddProductService} />
      )}
      
      {showAddProductService && currentService && (
        <AddProductService id={currentService.id} />
      )}
    </>
  );
};

export default WholeService;
