import MySlider from "@/components/slider/slider";
import { getBestSelling } from "@/app/actions/products/getBestSelling";
import Link from "next/link";
import MyButtons from "../../MyButton/MyButton";
import Card from "@/components/Products/Card/Card";

async function BestSelling() {
  const res = await getBestSelling();
  const data = res.data.slice(0, 11);
  const content = data.map((object) => {
    return (
      <div key={object.id}>
        <Card product={object} />
      </div>
    );
  });

  return (
    <>
      <MySlider content={content} idNext={1} idPrev={2} />
      <div className="text-center">
        <Link href={"/products"}>
          <MyButtons
            context={"View All Products"}
            width="fit-content"
            customStyle={{ padding: "16px 48px", margin: "40px 0" }}
          />
        </Link>
      </div>
    </>
  );
}

export default BestSelling;
