import { useState, useEffect, ChangeEvent } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import TutorialDataService from "../../../services/net/TutorialDataService";
import ITutorialData from "../../../services/types/tutorial.type";

interface RouterProps {
  id?: string;
}

type Props = {};

const Tutorial: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentTutorial, setCurrentTutorial] = useState<ITutorialData>({
    id: "",
    title: "",
    description: "",
    published: false,
  });
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (id) {
      getTutorial(id);
    }
  }, [id]);

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    setCurrentTutorial(prevState => ({
      ...prevState,
      title: title,
    }));
  };

  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const description = e.target.value;
    setCurrentTutorial(prevState => ({
      ...prevState,
      description: description,
    }));
  };

  const getTutorial = (id: string) => {
    TutorialDataService.get(id)
      .then((response: any) => {
        setCurrentTutorial(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const updatePublished = (status: boolean) => {
    const data: ITutorialData = {
      id: currentTutorial.id,
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: status,
    };

    TutorialDataService.update(data, currentTutorial.id)
      .then((response: any) => {
        setCurrentTutorial(prevState => ({
          ...prevState,
          published: status,
        }));
        setMessage("The status was updated successfully!");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    TutorialDataService.update(
      currentTutorial,
      currentTutorial.id
    )
      .then((response: any) => {
        setMessage("The tutorial was updated successfully!");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    TutorialDataService.delete(currentTutorial.id)
      .then((response: any) => {
        navigate("/tutorials");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  return (
    <div>
      {id && currentTutorial ? (
        <div className="edit-form">
          <h4>Tutorial</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={currentTutorial.title}
                onChange={onChangeTitle}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={currentTutorial.description}
                onChange={onChangeDescription}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentTutorial.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button
            className="badge badge-danger mr-2"
            onClick={deleteTutorial}
          >
            Delete
          </button>

          <button
            type="button"
            className="badge badge-success"
            onClick={updateTutorial}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Tutorial...</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
