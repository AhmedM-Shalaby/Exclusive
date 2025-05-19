import SectionCreateion from "@/components/sections/CreateContent/CreationSection";
import BestSelling from "@/components/sections/Home/BestSelling";
import Categories from "@/components/sections/Home/Categories";
import Offer from "@/components/sections/Home/Offer";
import TimeDown from "@/components/sections/Home/TimeDown";

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
  ];
  return (
    <div className="container m-auto px-4  relative">
      <Offer />
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
      <TimeDown />
    </div>
  );
}

export default Home;
