import http from "./base/http-common";
import ICategoryData from "../types/category.type";

class CategoryDataService {
  getAll() {
    return http.get<Array<ICategoryData>>("api/categories/list/");
  }

  get(id: string) {
    return http.get<ICategoryData>(`api/categories/read/${id}/`);
  }

  uploadImg(file: File, contentType: string, objectId: number, categoryId: number, onUploadProgress: any) {
    let formData = new FormData();
    formData.append("Path", file);
    formData.append("content_type", contentType);
    formData.append("object_id", objectId.toString());
    formData.append("category_id", categoryId.toString());

    return http.post<any>("api/images/upload-image/category/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  create(data: ICategoryData) {
    return http.post<ICategoryData>("api/categories/add/", data);
  }

  getImgAll(id: any) {
    return http.get<Array<ICategoryData>>(`api/categories/${id}/list/img/`);
  }

  update(data: ICategoryData, id: any) {
    return http.put<any>(`api/categories/update/${id}/`, data);
  }

  delete(id: any) {
    return http.delete<any>(`api/categories/delete/${id}/`);
  }

  deleteAll() {
    return http.delete<any>(`api/categories/deleteAll/`);
  }

  findByName(name: string) {
    return http.get<Array<ICategoryData>>(`api/categories/search?name=${name}`);
  }
}

// export default new CategoryDataService();
const CategoryDataServiceInstance = new CategoryDataService();
export default CategoryDataServiceInstance;