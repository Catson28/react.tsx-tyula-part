

/*
import http from "./base/http-common";
import ISubcategoryData from "../types/subcategory.type";

class SubcategoryDataService {
  getAll() {
    return http.get<Array<ISubcategoryData>>("api/subcategories/list/");
  }

  get(id: string) {
    return http.get<ISubcategoryData>(`api/subcategories/read/${id}/`);
  }

  create(data: ISubcategoryData) {
    return http.post<ISubcategoryData>("api/subcategories/add/", data);
  }

  update(data: ISubcategoryData, id: any) {
    return http.put<any>(`api/subcategories/update/${id}/`, data);
  }

  delete(id: any) {
    return http.delete<any>(`api/subcategories/delete/${id}/`);
  }

  deleteAll() {
    return http.delete<any>(`api/subcategories/deleteAll/`);
  }

  findByName(name: string) {
    return http.get<Array<ISubcategoryData>>(`api/subcategories/search?name=${name}`);
  }
}

// export default new SubcategoryDataService();
*/
import http from "./base/http-common";
import ISubcategoryData from "../types/subcategory.type";

class SubcategoryDataService {
  getAll() {
    return http.get<Array<ISubcategoryData>>("api/subcategories/list/");
  }

  get(id: string) {
    return http.get<ISubcategoryData>(`api/subcategories/read/${id}/`);
  }

  create(data: ISubcategoryData) {
    return http.post<ISubcategoryData>("api/subcategories/add/", data);
  }

  update(data: ISubcategoryData, id: any) {
    return http.put<any>(`api/subcategories/update/${id}/`, data);
  }

  delete(id: any) {
    return http.delete<any>(`api/subcategories/delete/${id}/`);
  }

  deleteAll() {
    return http.delete<any>(`api/subcategories/deleteAll/`);
  }

  findByName(name: string) {
    return http.get<Array<ISubcategoryData>>(`api/subcategories/search?name=${name}`);
  }
}

const subcategoryDataServiceInstance = new SubcategoryDataService();
export default subcategoryDataServiceInstance;

