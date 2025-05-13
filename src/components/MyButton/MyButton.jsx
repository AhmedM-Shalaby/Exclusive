export default function MyButtons({
  context,
  click,
  textColor = "#ffffff",
  bgcolor = "var(--main-color)",
  state = "button",
  width = "100%",
  customStyle = {},
}) {
  return (
    <button
      type={state}
      onClick={click}
      style={{
        color: textColor,
        width,
        backgroundColor: bgcolor,
        ...customStyle,
      }}
      className={` my-4 p-4  cursor-pointer`}
    >
      {context}
    </button>
  );
}
