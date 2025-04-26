import { getAllProducts } from "@/api/getAllProducts";
import Card from "@/components/Card/Card";
async function Home() {
  const data = await getAllProducts();
  console.log(data);

  return (
    <div className="flex justify-center items-center h-screen ">
      <Card />
    </div>
  );
}

export default Home;
