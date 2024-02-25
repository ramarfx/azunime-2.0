const Input = (props) => {
  const { type, name, placeholder, value, onChange, _classname } = props;
  return (
    <input
      className={`${_classname} bg-secondary-100 text-white focus-visible:outline-none focus-visible:border focus-visible:border-primary px-4 py-3 rounded-lg w-full`}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
