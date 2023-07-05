export default function NoteForm(props) {
  const {
    onSubmit,
    clickAdd,
    titleChange,
    contentChange,
    titleValue,
    contentValue,
    clickTextArea,
    inputTitleClass,
    buttonTitleClass,
    rows,
  } = props;
  return (
    <div className="form">
      <form onSubmit={onSubmit} className="note-form">
        <input
          onChange={titleChange}
          value={titleValue}
          className={inputTitleClass}
          placeholder="Title"
        />
        <textarea
          onChange={contentChange}
          value={contentValue}
          onClick={clickTextArea}
          rows={rows}
          className="input-text"
          placeholder="Take a note"
          required={true}
        />
        <button className={buttonTitleClass} onClick={clickAdd} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
