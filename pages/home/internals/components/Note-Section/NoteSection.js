// Fix deleteNote function
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect, useMemo } from 'react';
import Note from './Note';
import EditModal from './EditModal';
import DeleteAlert from './DeleteAlert';

export default function NoteSection(props) {
  const { clickTextArea, isFormDisplayed } = props;
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [hideDeleteAlert, setHideDeleteAlert] = useState(true);
  const [deleteAll, setDeleteAll] = useState(null);
  const [userId, setUserId] = useState(undefined);

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem('user'));
    const users = JSON.parse(localStorage.getItem('mockUsers'));
    const user = users.find((person) => person.email == email);
    const localNotes = JSON.parse(localStorage.getItem(`localNotes-${user.id}`));

    localNotes && setNotes(localNotes);
    setUserId(user.id);
  }, []);

  useEffect(() => {
    userId && localStorage.setItem(`localNotes-${userId}`, JSON.stringify(notes));
  }, [notes]);

  const selectedNote = useMemo(() => {
    return notes.find((note) => note.id == selectedNoteId);
  }, [notes, selectedNoteId]);

  function updateNoteTitle(event) {
    setNoteTitle(event.target.value);
  }

  function updateNoteContent(event) {
    setNoteContent(event.target.value);
  }

  function addNotes(event) {
    event.preventDefault();
    setNotes((prevValue) => [...prevValue, { id: uuidv4(), title: noteTitle ? noteTitle : 'Untitled', content: noteContent }]);
    setNoteTitle('');
    setNoteContent('');
  }
  function setSelected(noteId) {
    setSelectedNoteId(noteId == selectedNoteId ? null : noteId);
  }

  function handleEditSubmit(title, content) {
    setNotes((prevValue) => prevValue.map((note) => editSelectedNote(note, title, content)));
    setSelected(selectedNoteId);
  }

  function editSelectedNote(note, editedTitle, editedContent) {
    const title = editedTitle ? editedTitle : 'Untitled';
    const updatedNote = { id: selectedNoteId, title, content: editedContent };

    return note.id == selectedNoteId ? updatedNote : note;
  }

  function displayDeleteAlert(isDeletingAll) {
    setDeleteAll(isDeletingAll);
    toggleDeleteAlertVisibility();
  }

  function toggleDeleteAlertVisibility() {
    notes.length > 0 && setHideDeleteAlert(!hideDeleteAlert);
  }

  function closeDeleteAlertAndUnselectId() {
    setSelectedNoteId(null);
    toggleDeleteAlertVisibility();
  }

  function deleteNoteAndHideAlert(event) {
    event.preventDefault();
    setNotes(deleteAll ? [] : (prevValue) => prevValue.filter((note) => note.id != selectedNoteId));
    toggleDeleteAlertVisibility();
  }

  return (
    <div>
      <div className="delete-all-container">
        <button
          className={notes.length == 0 ? 'delete-all-inactive' : 'delete-all'}
          onClick={() => displayDeleteAlert(true)}
        >
          Delete All
        </button>
      </div>
      <DeleteAlert
        hideDeleteAlert={hideDeleteAlert}
        handleCancelClick={closeDeleteAlertAndUnselectId}
        handleSubmit={deleteNoteAndHideAlert}
        deleteAll={deleteAll}
      />

      <div className="form">
        <form
          onSubmit={addNotes}
          className="note-form"
        >
          <input
            onChange={updateNoteTitle}
            name="title"
            value={noteTitle}
            className={isFormDisplayed ? 'input-text' : 'hide'}
            placeholder="Title"
            maxLength={15}
          />
          <textarea
            id="add-note-content"
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
              key={note.id}
              handleOptionsClick={setSelected}
              isSelected={selectedNoteId == note.id}
              handleDeleteClick={() => displayDeleteAlert(false)}
              note={note}
            />
          ))}
        </div>
      </div>
      {selectedNote != null && (
        <EditModal
          onSubmit={handleEditSubmit}
          selectedNote={selectedNote}
          handleClose={() => setSelectedNoteId(null)}
        />
      )}
    </div>
  );
}
