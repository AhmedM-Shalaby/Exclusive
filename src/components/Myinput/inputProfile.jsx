function InputProfile({ element, elementFormik, IsDisabled = false }) {
  const { handleChange, handleBlur, error, value, touched } = elementFormik;
  return (
    <div>
      <input
        disabled={IsDisabled}
        type={element.type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={element.holder}
        name={element.name}
        className={`bg-[#aaa] p-4 outline-0 rounded-md cursor-pointer w-full ${
          IsDisabled ? "opacity-50" : ""
        }`}
      />
      {error && touched ? <p className="text-red-400 "> {error} </p> : null}
    </div>
  );
}

export default InputProfile;
