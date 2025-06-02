import SectionCreateion from "@/components/sections/CreateContent/CreationSection";
import Arrival from "@/components/sections/Home/Arrival";
import BestSelling from "@/components/sections/Home/BestSelling";
import Categories from "@/components/sections/Home/Categories";
import Explore from "@/components/sections/Home/Explore";
import Features from "@/components/sections/Home/Features ";
import Offer from "@/components/sections/Home/Offer";
import TimeDown from "@/components/sections/Home/TimeDown";

const components = {
  categories: <Categories />,
  bestSelling: <BestSelling />,
  arrival: <Arrival />,
  explore: <Explore />,
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
  const sections_2 = [
    {
      title: "Our Products",
      head: "Explore Our Products",
      section: "explore",
    },
    {
      title: "Featured",
      head: " New Arrival ",
      section: "arrival",
    },
  ];
  return (
    <div className="container m-auto px-4  relative">
      <Offer />
      {Sections.map((obj, index) => {
        return (
          <SectionCreateion key={`${index}`} title={obj.title} head={obj.head}>
            {components[obj.section]}
          </SectionCreateion>
        );
      })}
      <TimeDown />
      {sections_2.map((obj, index) => {
        return (
          <SectionCreateion key={`${index}`} title={obj.title} head={obj.head}>
            {components[obj.section]}
          </SectionCreateion>
        );
      })}
      <Features />
    </div>
  );
}

export default Home;
