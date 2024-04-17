import { useState, useEffect } from "react";
import UploadService from "../../../services/net/FileUploadDataService";
import ServiceDataService from "../../../services/net/ServiceDataService";
import IFile from "../../../services/types/File";
import React from 'react';
import styled from 'styled-components';

interface Props {
  id: number;
};


// Styled Components
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.label`
  margin-right: 8px;
`;

const CheckboxInput = styled.input`
  margin-right: 4px;
`;

const FormImgUploadService: React.FC<Props> = ({ id }) => {
  const [currentImage, setCurrentImage] = useState<File>();
  const [previewImage, setPreviewImage] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [imageInfos, setImageInfos] = useState<Array<IFile>>([]);
  const [serviceId, setServiceId] = useState<number>(id); // Assuming serviceId is of type number
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [uploadError, setUploadError] = useState<boolean>(false);
  const [cover, setCover] = useState<boolean>(false); // New state for checkbox

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

  const handleCoverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCover(event.target.checked);
  };

  const upload = () => {
    setProgress(0);
    if (!currentImage || !serviceId) return;

    const serviceIdNumber = Number(serviceId);

    ServiceDataService.uploadImg(
      currentImage,
      cover,
      serviceIdNumber,
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
          <h4>Carregar a Imagem</h4>
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

            {/* Checkbox Container */}
            <div className="form-group">
              <CheckboxContainer>
                <CheckboxLabel htmlFor="cover">Imagem para Capa?</CheckboxLabel>
                <CheckboxInput
                  type="checkbox"
                  id="cover"
                  checked={cover}
                  
                  onChange={handleCoverChange}
                  // {/*onChange={(e) => setCover(e.target.checked)}*/}
                  name="cover"
                />
              </CheckboxContainer>
            </div>
            
            <div className="form-group">
              <button
                type="button"
                className="btn btn-success"
                disabled={!currentImage || !serviceId || uploadSuccess}
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

export default FormImgUploadService;
