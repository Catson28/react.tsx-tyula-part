import http from "./base/http-common";

const upload = (file: File, contentType: string, objectId: number, onUploadProgress: any): Promise<any> => {
  let formData = new FormData();
  formData.append("Path", file);
  formData.append("content_type", contentType);
  formData.append("object_id", objectId.toString());

  return http.post("/api/images/add/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () : Promise<any> => {
  return http.get("/api/images/list-by-type/");
};

const FileUploadDataService = {
  upload,
  getFiles,
};

export default FileUploadDataService;
