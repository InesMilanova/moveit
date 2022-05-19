import "./Input.scss";

export const Input = ({
  name = "",
  type = "text",
  value,
  onChange,
  placeholder,
}) => (
  <label htmlFor={name}>
    <span>{placeholder}</span>
    <input
      id={name}
      autoComplete="on"
      name={name}
      type={type}
      value={value}
      onChange={(e) => onChange(e)}
    />
  </label>
);
