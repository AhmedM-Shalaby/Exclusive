import { gatCategoy } from "@/api/getCategory";
import MySlider from "@/components/slider/slider";
import Image from "next/image";

async function Categories() {
  const res = await gatCategoy();
  const category = res.data;
  const content = category.map((obj, index) => (
    <div key={index} className=" ">
      <div className="h-[170px] ">
        <Image src={obj.image} alt={obj.name} width={600} height={900} />
      </div>
      <p className="text-black text-center mt-4"> {obj.name}</p>
    </div>
  ));
  return (
    <div className="p-4 mb-6">
      <MySlider content={content} idNext={3} idPrev={4} />
    </div>
  );
}

export default Categories;
