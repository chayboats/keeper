export default function DeleteAlert(props) {
  const { deleteAlertClass, handleSubmit, handleCancelClick } = props;

  return (
    <div className={deleteAlertClass}>
      <form
        onSubmit={handleSubmit}
        className="delete-alert"
      >
        <h4>Delete Note?</h4>
        <p>This note will be permenantly deleted.</p>
        <button
          type="button"
          onClick={handleCancelClick}
          className="cancel-button"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="delete-button"
        >
          Delete
        </button>
      </form>
    </div>
  );
}

//hideDeleteAlert ? "hide" : "delete-alert"
