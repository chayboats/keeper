import Link from "next/link";

export default function Dropdown(props) {
  const { dropdownClass } = props;
  return (
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
  );
}
