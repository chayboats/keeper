import './internals/styles/home.css';
import Header from './internals/components/Header/Header';
import NoteSection from './internals/components/Note-Section/NoteSection';
import { useState } from 'react';

export default function Home() {
  const [hideHeaderDropdown, setHideHeaderDropdown] = useState(true);
  const [showForm, setShowForm] = useState(false);

  function toggleHeaderDropdownClass() {
    setHideHeaderDropdown(!hideHeaderDropdown);
  }

  function expandForm() {
    setShowForm(true);
  }

  function focusNoteContent() {
    document.getElementById('add-note-content').focus();
    toggleHeaderDropdownClass();
    expandForm();
  }

  return (
    <div className="home">
      <Header
        clickProfileImage={toggleHeaderDropdownClass}
        dropdownClass={hideHeaderDropdown ? 'hide' : 'header-dropdown'}
        createNote={focusNoteContent}
      />
      <NoteSection
        isFormDisplayed={showForm}
        clickTextArea={expandForm}
      />
    </div>
  );
}
