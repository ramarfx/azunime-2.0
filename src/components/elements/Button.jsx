const Button = (props) => {
  const { children, classname } = props;

  return (
    <button
      className={`p-4 bg-[#1A231C] text-primary text-base w-full rounded-lg hover:bg-primary hover:text-white transition ${classname}`}>
      {children}
    </button>
  );
};

export default Button;
