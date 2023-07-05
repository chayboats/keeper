import "./internals/styles/home.css";
import Header from "./internals/components/Header";
import NoteForm from "./internals/components/NoteForm";
import { useState } from "react";

export default function Home() {
  const [hideDropdown, setHideDropdown] = useState(true);
  const [showForm, setShowForm] = useState(false);

  function toggleDropdownClass() {
    setHideDropdown(!hideDropdown);
  }

  function expandForm() {
    setShowForm(true);
  }

  return (
    <div class="home">
      <Header
        clickProfileImage={toggleDropdownClass}
        dropdownClass={hideDropdown ? "hide" : "show"}
        createNote={() => {
          expandForm();
          toggleDropdownClass();
        }}
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
