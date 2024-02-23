const Input = (props) => {
  const { type, name, placeholder, value, onChange } = props;
  return (
    <input
      className="bg-secondary-200 text-white focus-visible:outline-none focus-visible:border focus-visible:border-primary px-4 py-3 rounded-lg w-full"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
