import "./internals/styles/home.css";
import Header from "./internals/components/Header";
import NoteForm from "./internals/components/NoteForm";
import Note from "./internals/components/Note";
import DeleteAlert from "./internals/components/DeleteAlert";
import { useState, useEffect } from "react";

export default function Home() {
  const [hideDropdown, setHideDropdown] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [profileImage, setProfileImage] = useState(undefined);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [notes, setNotes] = useState([]);

  async function getImage() {
    try {
      const imageData = await fetch(
        "https://api.slingacademy.com/v1/sample-data/photos"
      );
      const jsonImageData = await imageData.json();
      const jsonPhotos = jsonImageData.photos;
      const randomPhoto = randomElementFromArray(jsonPhotos);
      setProfileImage(randomPhoto.url);
    } catch (error) {
      alert(error);
    }
  }

  function randomElementFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function toggleDropdownClass() {
    setHideDropdown(!hideDropdown);
  }

  function expandForm() {
    setShowForm(true);
  }

  function createNote() {
    toggleDropdownClass();
    expandForm();
  }

  useEffect(() => {
    getImage();
  }, []);

  function updateNoteTitle(e) {
    setNoteTitle(e.target.value);
  }
  function updateNoteContent(e) {
    setNoteContent(e.target.value);
  }

  function addNotes(e) {
    e.preventDefault();
    setNotes((prevValue) => [
      ...prevValue,
      { title: noteTitle, content: noteContent },
    ]);
    setNoteTitle("");
    setNoteContent("");
  }

  if (profileImage === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="home">
      <Header
        profileImgSrc={profileImage}
        clickProfileImage={toggleDropdownClass}
        dropdownClass={hideDropdown ? "hide" : "header-dropdown"}
        createNote={createNote}
      />
      <NoteForm
        onSubmit={addNotes}
        titleValue={noteTitle}
        contentValue={noteContent}
        titleChange={updateNoteTitle}
        contentChange={updateNoteContent}
        clickTextArea={expandForm}
        inputTitleClass={showForm ? "input-text" : "hide"}
        buttonTitleClass={showForm ? "add-note" : "hide"}
        rows={showForm ? 3 : 1}
        clickAdd={addNotes}
      />
      <div>
        <div className="notes">
          {notes.map((note, index) => (
            <Note key={index} title={note.title} content={note.content} />
          ))}
        </div>
      </div>
      <div className="hide">
        <DeleteAlert />
      </div>
    </div>
  );
}

//  home-alert