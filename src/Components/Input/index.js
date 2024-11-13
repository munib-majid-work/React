const InputField = ({ style, type, value, name, handleChange }) => {
  return (
    <input
      className={style}
      type={type}
      value={value}
      name={name}
      onChange={handleChange}
    />
  );
};

export default InputField;
