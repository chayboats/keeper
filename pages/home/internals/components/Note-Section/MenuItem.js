export default function MenuItem(props) {
  const { itemText, onItemClick, lineClass } = props;
  return (
    <div>
      <p
        onClick={onItemClick}
        className="menu-item"
      >
        {itemText}
      </p>
      <span className={lineClass}>
        <hr />
      </span>
    </div>
  );
}
