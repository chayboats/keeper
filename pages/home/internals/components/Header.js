import Link from 'next/link';
export default function Header(props) {
  const {onClick, dropdownClass} = props;

  return (
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
        <ul className={dropdownClass}>
          <li id="create-note">+ Create Note</li>
          <li id="line">
            <hr />
          </li>
          <li id="logout">
            <Link
              className="logout"
              href="/"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
