export default function InvalidAlert(props) {
  const { className, id, isAlertHidden, message } = props;
  return (
    <div className={className}>
      <small
        id={id}
        className={isAlertHidden ? 'hide' : 'text-danger'}
      >
        {message}
      </small>
    </div>
  );
}
