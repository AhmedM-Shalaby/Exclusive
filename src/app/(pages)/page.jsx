import SectionCreateion from "@/components/sections/CreateContent/CreationSection";
import BestSelling from "@/components/sections/Home/BestSelling";
import Categories from "@/components/sections/Home/Categories";

const components = {
  categories: <Categories />,
  bestSelling: <BestSelling />,
};

async function Home() {
  const Sections = [
    {
      title: "today's",
      head: "Flash Sales",
      section: "bestSelling",
    },
    {
      title: "Categories",
      head: " Browse By Category ",
      section: "categories",
    },
    {
      title: "heelo",
      head: " price ",
      section: "teeeeests",
    },
  ];
  return (
    <div className="w-full max-w-[1800px] mx-auto px-4  relative">
      {Sections.map((obj, index) => {
        return (
          <SectionCreateion
            key={`section-${index}`}
            title={obj.title}
            head={obj.head}
          >
            {components[obj.section]}
          </SectionCreateion>
        );
      })}
    </div>
  );
}

export default Home;
