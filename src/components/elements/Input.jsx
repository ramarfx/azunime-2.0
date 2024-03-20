import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, name, placeholder, value, onChange, _classname } = props;
  return (
    <input
      className={`${_classname} w-full rounded-lg border border-secondary-100 bg-secondary-100 px-4 py-3 text-white focus-visible:border-primary focus-visible:outline-none`}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      ref={ref}
    />
  );
});

export default Input;
