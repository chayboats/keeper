import { useState } from 'react';

export default function EditModal(props) {
  const { handleClose, onSubmit, selectedNote } = props;

  const [title, setTitle] = useState(selectedNote?.title);
  const [content, setContent] = useState(selectedNote?.content);

  function updateTitle(event) {
    setTitle(event.target.value);
  }

  function updateContent(event) {
    setContent(event.target.value);
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title fs-5"
              id="exampleModalLabel"
            >
              Edit Note
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            />
          </div>
          <div className="modal-body">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                onSubmit(title, content);
              }}
            >
              <div className="mb-3">
                <label
                  htmlFor="note-title"
                  className="col-form-label"
                >
                  Title:
                </label>
                <input
                  onChange={updateTitle}
                  value={title}
                  type="text"
                  name="new-title"
                  className="form-control"
                  id="note-title"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="note-content"
                  className="col-form-label"
                >
                  Content:
                </label>
                <textarea
                  onChange={updateContent}
                  value={content}
                  className="form-control"
                  id="note-content"
                  required
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => handleClose(selectedNote.id)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss={content ? 'modal' : null}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
