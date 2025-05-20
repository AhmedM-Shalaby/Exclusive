import { getAllProducts } from "@/api/getAllProducts";
import Card from "@/components/Products/Card/Card";
import SliderGrid from "@/components/slider/silderGrid";

async function Explore() {
  const products = await getAllProducts();
  const content = products.data.map((product) => {
    return <Card key={product.id} product={product} />;
  });

  return (
    <>
      <SliderGrid content={content} />
    </>
  );
}

export default Explore;
