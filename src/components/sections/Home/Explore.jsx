import { getAllProducts } from "@/app/actions/products/getAllProducts";
import Card from "@/components/Products/Card/Card";
import SliderGrid from "@/components/slider/silderGrid";

async function Explore() {
  const products = await getAllProducts();
  const content = products.data.map((product, index) => {
    return <Card product={product} key={index} />;
  });

  return (
    <>
      <SliderGrid content={content} />
    </>
  );
}

export default Explore;
