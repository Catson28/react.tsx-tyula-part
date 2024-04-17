import http from "./base/http-common";
import IProductData from "../types/product.type";

class ProductService {
  getAll() {
    return http.get<Array<IProductData>>("api/products/list/");
  }

  get(id: string) {
    return http.get<IProductData>(`api/products/retrieve/${id}/`);
  }

  uploadImg(
    file: File,
    cover: boolean,
    productId: number,
    onUploadProgress: any
  ) {
    let formData = new FormData();
    formData.append("Path", file);
    formData.append("cover", cover.toString());
    formData.append("product_id", productId.toString());
  
    return http.post<any>("api/images/upload-image/product/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  create(data: IProductData) {
    return http.post<IProductData>("api/products/add/", data);
  }

  update(data: IProductData, id: any) {
    return http.put<any>(`api/products/update/${id}/`, data);
  }

  delete(id: any) {
    return http.delete<any>(`api/products/delete/${id}/`);
  }

  uploadImage(productId: any, imageData: any) {
    return http.post<any>(`api/products/upload-image/${productId}/`, imageData);
  }

  deleteImage(imageId: any) {
    return http.delete<any>(`api/products/delete-image/${imageId}/`);
  }

  deleteAll() {
    return http.delete<any>(`api/products/deleteAll/`);
  }

  findByName(name: string) {
    return http.get<Array<IProductData>>(`api/products/search?name=${name}`);
  }

  selectCoverImage(productId: any, imageData: any) {
    return http.put<any>(`api/products/select-cover-image/${productId}/`, imageData);
  }

  selectOrUploadRawMaterial(productId: any, materialData: any) {
    return http.put<any>(`api/products/select-or-upload-raw-material/${productId}/`, materialData);
  }

  selectOrUploadCategories(productId: any, categoryData: any) {
    return http.put<any>(`api/products/select-or-upload-categories/${productId}/`, categoryData);
  }

  listServices(productId: any) {
    return http.get<Array<any>>(`api/products/list-services/${productId}/`);
  }

  addService(productId: any, data: any) {
    return http.post<any>(`api/products/add-service/${productId}/`, data);
  }

  updateService(serviceId: any, data: any) {
    return http.put<any>(`api/products/update-service/${serviceId}/`, data);
  }

  retrieveService(serviceId: any) {
    return http.get<any>(`api/products/retrieve-service/${serviceId}/`);
  }

  deleteService(serviceId: any) {
    return http.delete<any>(`api/products/delete-service/${serviceId}/`);
  }
}

// export default new ProductService();
const ProductServiceInstance = new ProductService();
export default ProductServiceInstance;
