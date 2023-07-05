import Dropdown from "./Dropdown";
export default function Header(props) {
  const { clickProfileImage, dropdownClass, createNote } = props;

  return (
    <div>
      <header className="header">
        <h1>Keeper</h1>
        <div className="profile">
          <img
            src="https://github.com/mdo.png"
            alt="mdo"
            width="32"
            height="32"
            className="rounded-circle"
            onClick={clickProfileImage}
          />
        </div>
      </header>
      <Dropdown createNote={createNote} dropdownClass={dropdownClass} />
    </div>
  );
}
