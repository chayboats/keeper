import "./internals/styles/home.css";
import Header from "./internals/components/Header";
import NoteForm from "./internals/components/NoteForm";
import { useState, useEffect } from "react";

export default function Home() {
  const [hideDropdown, setHideDropdown] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [profileImage, setProfileImage] = useState(undefined);

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

  if (profileImage === undefined) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="home">
      <Header
        profileImgSrc={profileImage}
        clickProfileImage={toggleDropdownClass}
        dropdownClass={hideDropdown ? "hide" : "show"}
        createNote={createNote}
      />
      <NoteForm
        clickTextArea={expandForm}
        inputTitleClass={showForm ? "input-text" : "hide"}
        buttonTitleClass={showForm ? "add-note" : "hide"}
        rows={showForm ? 3 : 1}
      />
    </div>
  );
}
