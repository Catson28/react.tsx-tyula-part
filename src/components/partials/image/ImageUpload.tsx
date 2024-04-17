import { useState, useEffect } from "react";
import UploadService from "../../../services/net/FileUploadDataService";
import IFile from "../../../services/types/File";
import React from 'react';

const ImageUpload: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [imageInfos, setImageInfos] = useState<Array<IFile>>([]);
  const [contentType, setContentType] = useState<string>("");
  const [objectId, setObjectId] = useState<number>();

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

  const handleContentTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContentType(event.target.value);
  };

  const handleObjectIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjectId(parseInt(event.target.value));
  };

  const upload = () => {
    setProgress(0);
    if (!currentImage || !contentType || !objectId) return; // Verifica se há uma imagem, título e descrição

    UploadService.upload(currentImage, contentType, objectId, (event: any) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        return UploadService.getFiles();
      })
      .then((files) => {
        setImageInfos(files.data);
      })
      .catch((err) => {
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
      <div className="row">
        <div className="col-8">
          <label className="btn btn-default p-0">
            <input type="file" accept="image/*" onChange={selectImage} />
          </label>
        </div>
        <div className="col-4">
          <input
            type="text"
            placeholder="Content Type"
            value={contentType}
            onChange={handleContentTypeChange}
          />
          <input
            type="number"
            placeholder="Object ID"
            value={objectId}
            onChange={handleObjectIdChange}
          />
          <button
            className="btn btn-success btn-sm"
            disabled={!currentImage || !contentType || !objectId}
            onClick={upload}
          >
            Upload
          </button>
        </div>
      </div>

      {currentImage && progress > 0 && (
        <div className="progress my-3">
          <div
            className="progress-bar progress-bar-info"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}

      {previewImage && (
        <div>
          <img className="preview" src={previewImage} alt="" />
        </div>
      )}

      {message && (
        <div className="alert alert-secondary mt-3" role="alert">
          {message}
        </div>
      )}

      {imageInfos.length > 0 && (
        <div className="card mt-3">
          <div className="card-header">List of Images</div>
          <ul className="list-group list-group-flush">
            {imageInfos.map((img, index) => (
              <li className="list-group-item" key={index}>
                <p>
                  <a href={img.url}>{img.url}</a>
                </p>
                <img src={'http://localhost:8000'+img.Path} alt={img.url} height="80px" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
