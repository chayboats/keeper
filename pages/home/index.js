import Header from './internals/components/Header';
import './internals/styles/home.css';
import { useState } from 'react';

export default function Home() {
  const [hideDropdown, setHideDropdown] = useState(true);

  function toggleDropdownClass() {
    setHideDropdown(!hideDropdown);
  }
  return (
    <div class="home">
      <Header
        onClick={toggleDropdownClass}
        dropdownClass={hideDropdown ? 'hide' : 'show'}
      />
    </div>
  );
}
