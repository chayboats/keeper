// Fix deleteNote function
import { v4 as uuidv4 } from 'uuid';
import { useState, useMemo } from 'react';
import Note from './Note';
import DeleteAlert from './DeleteAlert';
import EditModal from './EditModal';

export default function NoteSection(props) {
  const { clickTextArea, isFormDisplayed } = props;
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [hideDeleteAlert, setHideDeleteAlert] = useState(true);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  const selectedNote = useMemo(() => {
    return notes.find((note) => note.id == selectedNoteId);
  }, [notes, selectedNoteId]);

  function addNotes(event) {
    event.preventDefault();
    setNotes((prevValue) => [...prevValue, { id: uuidv4(), title: noteTitle ? noteTitle : 'Untitled', content: noteContent }]);
    setNoteTitle('');
    setNoteContent('');
  }

  function updateNoteTitle(event) {
    setNoteTitle(event.target.value);
  }

  function updateNoteContent(event) {
    setNoteContent(event.target.value);
  }

  function toggleDeleteAlertClass() {
    setHideDeleteAlert(!hideDeleteAlert);
  }

  function closeDeleteAlertAndUnselectId() {
    setSelectedNoteId(null);
    toggleDeleteAlertClass();
  }

  function deleteNoteAndHideAlert(event) {
    event.preventDefault();
    setNotes((prevValue) => prevValue.filter((note) => note.id != selectedNoteId));
    toggleDeleteAlertClass();
  }

  function setSelected(noteId) {
    setSelectedNoteId(noteId == selectedNoteId ? null : noteId);
  }

  return (
    <div>
      <div className="form">
        <form
          onSubmit={addNotes}
          className="note-form"
        >
          <input
            onChange={updateNoteTitle}
            value={noteTitle}
            className={isFormDisplayed ? 'input-text' : 'hide'}
            placeholder="Title"
            maxLength={15}
          />
          <textarea
            onChange={updateNoteContent}
            value={noteContent}
            onClick={clickTextArea}
            rows={isFormDisplayed ? 3 : 1}
            className="input-text"
            placeholder="Take a note"
            required
            maxLength={95}
          />
          <button
            className={isFormDisplayed ? 'add-note' : 'hide'}
            type="submit"
          >
            Add
          </button>
        </form>
      </div>

      <div>
        <div className="notes">
          {notes.map((note) => (
            <Note
              id={note.id}
              key={note.id}
              title={note.title}
              content={note.content}
              handleOptionsClick={setSelected}
              isSelected={selectedNoteId == note.id}
              handleDeleteClick={toggleDeleteAlertClass}
              note={note}
            />
          ))}
        </div>
      </div>
      {selectedNote != null && <EditModal selectedNote={selectedNote} />}

      <DeleteAlert
        deleteAlertClass={hideDeleteAlert ? 'hide' : 'home-alert'}
        handleCancelClick={closeDeleteAlertAndUnselectId}
        handleSubmit={deleteNoteAndHideAlert}
      />
    </div>
  );
}
