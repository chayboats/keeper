export default function NoteForm(props) {
  const { onClick, inputTitleClass, buttonTitleClass, rows } = props;
  return (
    <div className="form">
      <form className="note-form">
        <input
          className={inputTitleClass}
          placeholder="Title"
        />
        <div className="text">
          <textarea
            onClick={onClick}
            rows={rows}
            className="input-text"
            placeholder="Take a note"
          ></textarea>
        </div>
        <div>
          <button
            className={buttonTitleClass}
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
