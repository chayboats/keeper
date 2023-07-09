import MenuItem from '@/pages/home/internals/components/MenuItem';

export default function Note(props) {
  const { id, handleOptionsClick, clickEdit, clickDelete, title, content, isSelected } = props;

  return (
    <div
      id={id}
      className="note"
    >
      <span className="title-and-options">
        <h5 className="note-tite">{title}</h5>
        <i
          onClick={() => handleOptionsClick(id)}
          className="fa-solid fa-ellipsis-vertical"
        ></i>
      </span>
      <div className={'dropdown-container'}>
        <div className={isSelected ? 'note-dropdown' : 'hide'}>
          <MenuItem
            itemText="Edit"
            onItemClick={clickEdit}
            lineClass="line"
          />
          <MenuItem
            itemText="Delete"
            onItemClick={clickDelete}
            lineClass="none"
          />
        </div>
      </div>
      <p className="note-content">{content}</p>
    </div>
  );
}