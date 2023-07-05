export default function Note(props) {
  const { title, content } = props;
  return (
    <div className="note">
      <div className="note-tite">{title}</div>
      <div className="note-content">{content}</div>
    </div>
  );
}
