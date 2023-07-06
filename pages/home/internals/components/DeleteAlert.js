export default function DeleteAlert() {
  return (
    <div className="delete-alert">
      <h4>Delete Note?</h4>
      <p>This note will be permenantly deleted.</p>
      <button className="cancel-button">Cancel</button>
      <button className="delete-button">Delete</button>
    </div>
  );
}
