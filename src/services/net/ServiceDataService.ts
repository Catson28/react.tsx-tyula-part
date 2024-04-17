import http from "./base/http-common";
import IServiceData from "../types/service.type";

class ServiceDataService {
  getAll() {
    return http.get<Array<IServiceData>>("api/services/list/");
  }

  get(id: string) {
    return http.get<IServiceData>(`api/services/retrieve/${id}/`);
  }

  uploadImg(
    file: File,
    cover: boolean,
    serviceId: number,
    onUploadProgress: any
  ) {
    let formData = new FormData();
    formData.append("Path", file);
    formData.append("cover", cover.toString());
    formData.append("service_id", serviceId.toString()); // Change categoryId to serviceId
  
    return http.post<any>("api/images/upload-image/service/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }
  

  create(data: IServiceData) {
    return http.post<IServiceData>("api/services/add/", data);
  }

  update(data: IServiceData, id: any) {
    return http.put<any>(`api/services/update/${id}/`, data);
  }

  delete(id: any) {
    return http.delete<any>(`api/services/delete/${id}/`);
  }

  uploadImage(serviceId: any, imageData: any) {
    return http.post<any>(`api/services/upload-image/${serviceId}/`, imageData);
  }

  deleteImage(imageId: any) {
    return http.delete<any>(`api/services/delete-image/${imageId}/`);
  }

  deleteAll() {
    return http.delete<any>(`api/services/deleteAll/`);
  }

  findByName(name: string) {
    return http.get<Array<IServiceData>>(`api/services/search?name=${name}`);
  }

  selectCoverImage(serviceId: any, imageData: any) {
    return http.put<any>(`api/services/select-cover-image/${serviceId}/`, imageData);
  }

  selectOrUploadRawMaterial(serviceId: any, materialData: any) {
    return http.put<any>(`api/services/select-or-upload-raw-material/${serviceId}/`, materialData);
  }

  selectOrUploadCategories(serviceId: any, categoryData: any) {
    return http.put<any>(`api/services/select-or-upload-categories/${serviceId}/`, categoryData);
  }


  listProducts(serviceId: any) {
    return http.get<Array<any>>(`api/services/list-products/${serviceId}/`);
  }

  addProduct(serviceId: any, data: any) {
    return http.post<any>(`api/services/add-product/${serviceId}/`, data);
  }

  updateProduct(productId: any, data: any) {
    return http.put<any>(`api/services/update-product/${productId}/`, data);
  }

  retrieveProduct(productId: any) {
    return http.get<any>(`api/services/retrieve-product/${productId}/`);
  }

  deleteProduct(productId: any) {
    return http.delete<any>(`api/services/delete-product/${productId}/`);
  }

}

// export default new ServiceDataService();
const ServiceDataServiceInstance = new ServiceDataService();
export default ServiceDataServiceInstance;
