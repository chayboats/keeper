import MenuItem from '@/pages/home/internals/components/Note-Section/MenuItem';

export default function Note(props) {
  const { note, handleOptionsClick, handleDeleteClick, isSelected } = props;

  return (
    <div
      id={note.id}
      className="note"
    >
      <span className="title-and-options">
        <h5 className="note-tite">{note.title}</h5>
        <i
          onClick={() => handleOptionsClick(note.id)}
          className="fa-solid fa-ellipsis-vertical"
        ></i>
      </span>
      <div className="dropdown-container">
        <div className={isSelected ? 'note-dropdown' : 'hide'}>
          <div>
            <p
              type="button"
              className="menu-item"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Edit
            </p>
            <span className="line">
              <hr />
            </span>
          </div>
          <MenuItem
            itemText="Delete"
            onItemClick={handleDeleteClick}
            lineClass="none"
          />
        </div>
      </div>
      <p className="note-content">{note.content}</p>
    </div>
  );
}
