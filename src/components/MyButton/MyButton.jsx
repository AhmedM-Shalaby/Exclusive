export default function MyButtons({
  context,
  click,
  textColor = "#ffffff",
  bgcolor = "var(--main-color)",
  state = "button",
  width = "100%",
}) {
  return (
    <button
      type={state}
      onClick={click}
      style={{ color: textColor, width, backgroundColor: bgcolor }}
      className={` my-4 p-4  cursor-pointer`}
    >
      {context}
    </button>
  );
}
