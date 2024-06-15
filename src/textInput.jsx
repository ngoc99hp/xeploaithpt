
const TextInput = ({
  value,
  step,
  label,
  isRequire,
  require,
  className,
  type,
  disable,
  id,
  onChange,
  onBlur,
  min,
  max,
  name
}) => {

  return (
    <div className={` ${className ? className : ""} w-full relative `}>
      <input
        required={require ? require : false}
        disabled={disable}
        autoComplete="off"
        type={type ? type : "text"}
        id={id}
        className={`${
          disable ? "!bg-bordercl cursor-not-allowed" : ""
        } block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-opacity-0 rounded-[5px] border-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0  peer`}
        placeholder=""
        value={value}
        step={step}
        onChange={onChange}
        onBlur={onBlur}
        min={min}
        max={max}
        name={name}
      />
      <label
        htmlFor={id}
        className={`${
          disable ? "!cursor-not-allowed bg-white" : ""
        } cursor-text absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white peer-focus:bg-white px-2 peer-focus:px-2 peer-focus:text-[#898989]   peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1`}
      >
        {label}
        {isRequire ? (
          <span className="text-red-600 cursor-default ">*</span>
        ) : (
          <></>
        )}
      </label>
    </div>
  );
};

export default TextInput
