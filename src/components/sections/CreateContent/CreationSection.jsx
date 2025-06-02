function SectionCreateion({ title, head, children }) {
  return (
    <section className="container mx-auto px-4">
      <h4 className="relative  before:content-[''] before:absolute before:left-[-25px] before:w-[20px] before:h-[40px] before:bg-[var(--main-color)] before:rounded-[5px] text-xl text-[var(--main-color)] font-bold">
        {title}
      </h4>
      <h2 className="mt-4 mb-12 text-[20px] md:text-[36px] font-bold tracking-wider">
        {head}
      </h2>
      <div>{children}</div>
      <hr className="my-15 w-[80%] mx-auto text-gray-400" />
    </section>
  );
}

export default SectionCreateion;
