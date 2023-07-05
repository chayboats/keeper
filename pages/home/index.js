import './internals/styles/home.css';
import Header from './internals/components/Header';
import NoteForm from './internals/components/NoteForm';
import { useState } from 'react';

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
        onClick={toggleDropdownClass}
        dropdownClass={hideDropdown ? 'none' : 'show'}
      />
      <NoteForm onClick={expandForm} inputTitleClass={showForm ? 'input-text' : 'none'} buttonTitleClass={showForm ? 'add-note': 'none'} rows={showForm ?  3 : 1}/>
    </div>
  );
}
