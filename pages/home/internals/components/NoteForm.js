export default function NoteForm(props) {
  const { clickTextArea, inputTitleClass, buttonTitleClass, rows } = props;
  return (
    <div className="form">
      <form className="note-form">
        <input className={inputTitleClass} placeholder="Title" />
        <textarea
          onClick={clickTextArea}
          rows={rows}
          className="input-text"
          placeholder="Take a note"
        />
        <button className={buttonTitleClass} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
