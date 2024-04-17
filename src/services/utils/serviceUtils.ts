import { useState } from 'react';
import ServiceDataService from "../net/ServiceDataService";
import IServiceData from "./../types/service.type";

export const useServiceState = () => {
  const [currentService, setCurrentService] = useState<IServiceData | null>(null);
  const [showServiceForm, setShowServiceForm] = useState<boolean>(false);
  const [showService, setShowService] = useState<boolean>(false);
  const [showImgService, setShowImgService] = useState<boolean>(false);
  const [showListServices, setShowListServices] = useState<boolean>(false);
  const [deletedServiceId, setDeletedServiceId] = useState<string | null>(null);
  const [showAddProductService, setShowAddProductService] = useState<boolean>(false);
  const [showListProductService, setShowListProductService] = useState<boolean>(false);



  const handleServiceClose = () => {
    setShowServiceForm(false);
    setShowListServices(false);
    setShowService(false);
    setShowImgService(false);
    setShowAddProductService(false);
    setShowListProductService(false);
  };

  const handleListServicesClick = () => {
    if (showListServices) {
      handleServiceClose();
    } else {
      handleServiceClose();
      setShowListServices(true);
    }
  };

  const handleAddServiceClick = () => {
    if (showServiceForm) {
      handleServiceClose();
    } else {
      handleServiceClose();
      setShowServiceForm(true);
    }
  };

  const handleEditService = (service: IServiceData) => {
    if (service) {
      setCurrentService(service);
      handleServiceClose();
      setShowService(true);
    }
  };

  const handleAddProductService = (service: IServiceData) => {
    if (service) {
      setCurrentService(service);
      handleServiceClose();
      setShowAddProductService(true);
    }
  };

  const handleListProductService = (service: IServiceData) => {
    if (service) {
      setCurrentService(service);
      handleServiceClose();
      setShowListProductService(true);
    }
  };

  const handleImageService = (service: IServiceData) => {
    if (service) {
      setCurrentService(service);
      handleServiceClose();
      setShowImgService(true);
    }
  };

  const handleDeleteService = (serviceId: string) => {
    ServiceDataService.delete(serviceId)
      .then((response: any) => {
        handleServiceClose();
        setDeletedServiceId(serviceId);
        setCurrentService(null);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const handleUpdateService = (updatedService: IServiceData) => {
    ServiceDataService.update(updatedService, updatedService.id)
      .then((response: any) => {
        // setCurrentService(currentService);
        handleServiceClose();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return {
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
    setShowImgService,
    handleListServicesClick,
    handleAddServiceClick,
    handleEditService,
    handleAddProductService,
    handleListProductService,
    handleImageService,
    handleDeleteService,
    handleUpdateService
  };
};
