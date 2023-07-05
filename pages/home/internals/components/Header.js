import Dropdown from "./Dropdown";
export default function Header(props) {
  const { profileImgSrc, clickProfileImage, dropdownClass, createNote } = props;

  return (
    <div>
      <header className="header">
        <h1>Keeper</h1>
        <div className="profile">
          <img
            src={profileImgSrc}
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
