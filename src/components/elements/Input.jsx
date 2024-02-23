const Input = (props) => {
    const {
        type,
        name,
        placeholder,
        value,
        onChange
    } = props
    return (
        <input className="bg-secondary-200 text-white focus:border-none focus:ring-0 "
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

export default Input;