export default function MenuItem(props) {
  const { id, itemText, onItemClick, lineClass } = props;
  return (
    <div id={id}>
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
