function InputProfile({ element, elementFormik }) {
  const { handleChange, handleBlur, error, value, touched } = elementFormik;

  return (
    <div>
      <input
        type={element.type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={element.holder}
        name={element.name}
        className="bg-[#eee] p-4 outline-0 rounded-md cursor-pointer w-full"
      />
      {error && touched ? <p className="text-red-400 "> {error} </p> : null}
    </div>
  );
}

export default InputProfile;
