import { useState, useEffect } from "react";
import UploadService from "../../../services/net/FileUploadDataService";
import CategoryDataService from "../../../services/net/CategoryDataService";
import IFile from "../../../services/types/File";
import React from 'react';
import styled from 'styled-components';

interface Props {
  id: number;
};

const FormImgUploadCategory: React.FC<Props> = ({ id }) => {
  const [currentImage, setCurrentImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [imageInfos, setImageInfos] = useState<Array<IFile>>([]);
  const [contentType, setContentType] = useState<string>(String(id)); // Assuming contentType is of type string
  const [objectId, setObjectId] = useState<number>(id); // Assuming objectId is of type number
  const [categoryId, setCategoryId] = useState<number>(id); // Assuming categoryId is of type number
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<boolean>(false);

  useEffect(() => {
    UploadService.getFiles().then((response) => {
      setImageInfos(response.data);
    });
  }, []);

  const selectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files as FileList;
    setCurrentImage(selectedFiles?.[0]);
    setPreviewImage(URL.createObjectURL(selectedFiles?.[0]));
    setProgress(0);
  };

  const upload = () => {
    setProgress(0);
    if (!currentImage || !contentType || !objectId || !categoryId) return;

    const contentTypeString = String(contentType);
    const objectIdNumber = Number(objectId);
    const categoryIdNumber = Number(categoryId);

    CategoryDataService.uploadImg(
      currentImage,
      contentTypeString,
      objectIdNumber,
      categoryIdNumber,
      (event: any) => {
        setProgress(Math.round((100 * event.loaded) / event.total));
      }
    )
      .then((response) => {
        setMessage(response.data.message);
        setUploadSuccess(true);
        setUploadError(false);
        setTimeout(() => {
          setUploadSuccess(false);
          setCurrentImage(undefined);
        }, 3000);
        return UploadService.getFiles();
      })
      .then((files) => {
        setImageInfos(files.data);
      })
      .catch((err) => {
        setUploadError(true);
        setUploadSuccess(false);
        setProgress(0);

        if (err.response && err.response.data && err.response.data.message) {
          setMessage(err.response.data.message);
        } else {
          setMessage("Could not upload the Image!");
        }

        setCurrentImage(undefined);
      });
  };

  return (
    <div>
      {id && (
        <div className="edit-form">
          <h4>Upload Image</h4>
          <form>
            <div className="form-group">
              <label htmlFor="image">Select Image</label>
              <input
                type="file"
                className="form-control"
                id="image"
                accept="image/*"
                onChange={selectImage}
              />
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-success"
                disabled={!currentImage || !contentType || !objectId || !categoryId || uploadSuccess}
                onClick={upload}
              >
                Upload
              </button>
            </div>
          </form>
          {currentImage && progress > 0 && (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: `${progress}%` }}
              >
                {progress}%
              </div>
            </div>
          )}
          {message && (
            <div className="alert alert-info" role="alert">
              {message}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FormImgUploadCategory;




