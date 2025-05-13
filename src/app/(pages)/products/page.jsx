import { getAllProducts } from "@/api/getAllProducts";
import Card from "@/components/Card/Card";

async function products() {
  const searchParmes = { title: "test" };
  const queries = `?limit=6&sort=-sold&price[gte]=100&page=2`;

  const { data } = await getAllProducts(queries);
  console.log(data);
  return (
    <div className="container m-auto bg-[#f0f0f0] p-4">
      <h1 className="text-2xl font-bold my-4  ">All products</h1>
      <div className="flex gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 w-[70%] ">
          {data.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
        <div className="w-[30%] bg-white p-4">
          <h1 className="text-xl font-bold">Filter</h1>
          {/* <Filter /> */}
        </div>
      </div>
    </div>
  );
}

export default products;
