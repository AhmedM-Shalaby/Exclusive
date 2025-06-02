function Myinput({ type, name, holder, func }) {
  return (
    <div>
      <input
        placeholder={holder}
        className="py-4  text-[14px]  border-b-1 border-black  cursor-pointer outline-none w-full"
        name={name}
        type={type}
        onChange={func.onChange}
        onBlur={func.onBlur}
        value={func.values[name]}
      />
      {func.errors[name] && func.touched[name] && (
        <div className="text-red-500 text-sm">{func.errors[name]}</div>
      )}
    </div>
  );
}

export default Myinput;
