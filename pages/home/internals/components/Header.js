import Dropdown from './Dropdown';
export default function Header(props) {
  const { onClick, dropdownClass } = props;

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
            onClick={onClick}
          />
        </div>
      </header>
      <Dropdown dropdownClass={dropdownClass} />
    </div>
  );
}
