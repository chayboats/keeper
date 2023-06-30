export default function LabeledInput(props) {
  const {
    divClass,
    id,
    type,
    inputClass,
    placeholder,
    labelClass,
    labelFor,
    labelText,
    onChange,
    required,
    value,
  } = props;

  return (
    <div className={divClass}>
      <input
        type={type}
        className={inputClass}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={value}
      />
      <label className={labelClass} htmlFor={labelFor}>
        {labelText}
      </label>
    </div>
  );
}
