export default function DeleteAlert(props) {
  const { hideDeleteAlert, handleSubmit, handleCancelClick, deleteAll } = props;

  return (
    <div className={hideDeleteAlert ? 'hide' : 'delete-alert-container'}>
      <form
        onSubmit={handleSubmit}
        className="delete-alert"
      >
        <h4>Delete {deleteAll ? 'notes' : 'note'}?</h4>
        <p>
          {deleteAll ? 'All' : 'This'} {deleteAll ? 'notes' : 'note'} will be permenantly deleted.
        </p>
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
