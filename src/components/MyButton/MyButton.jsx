export default function MyButtons({
  context,
  click,
  isDisabled = false,
  textColor = "#ffffff",
  state = "button",
  width = "100%",
  customStyle = {},
}) {
  return (
    <button
      type={state}
      disabled={isDisabled}
      onClick={click}
      style={{
        color: textColor,
        width,
        ...customStyle,
      }}
      className={` my-4 p-4  cursor-pointer bg-[var(--main-color)]`}
    >
      {context}
    </button>
  );
}
