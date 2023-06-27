export default function LabeledInput(props) {
  const { divClass, id, type, inputClass, placeholder, labelClass, labelFor, labelText } = props;
  return (
    <div className={divClass}>
      <input
        type={type}
        className={inputClass}
        id={id}
        placeholder={placeholder}
      />
      <label
        className={labelClass}
        for={labelFor}
      >
        {labelText}
      </label>
    </div>
  );
}
