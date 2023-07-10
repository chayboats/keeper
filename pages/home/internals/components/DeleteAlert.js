export default function DeleteAlert(props) {
  const { hideDeleteAlert, toggleDeleteAlertClass, deleteNote } = props;

  return (
    <div className={hideDeleteAlert}>
      <form className="delete-alert">
        <h4>Delete Note?</h4>
        <p>This note will be permenantly deleted.</p>
        <button
          onClick={toggleDeleteAlertClass}
          className="cancel-button"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={deleteNote}
          className="delete-button"
        >
          Delete
        </button>
      </form>
    </div>
  );
}

//hideDeleteAlert ? "hide" : "delete-alert"
