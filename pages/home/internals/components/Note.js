export default function Note(props) {
  const { title, content } = props;
  return (
    <div className="note">
      <span className="top">
        <h5 className="note-tite">{title}</h5>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </span>
      <p className="note-content">{content}</p>
    </div>
  );
}
