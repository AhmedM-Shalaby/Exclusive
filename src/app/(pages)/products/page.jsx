import { getAllProducts } from "@/app/actions/products/getAllProducts";
import MyPagination from "@/components/Pagination/Pagination";
import Card from "@/components/Products/Card/Card";
import FilterPoducts from "@/components/Products/Filter/FilterProducts";

async function products({ searchParams }) {
  const { limit, sort, category, page } = await searchParams;
  const queries = `?limit=${limit || "8"}&page=${page || 1}${
    sort ? `&sort=${sort}` : ""
  }${category ? `&category=${category}` : ""}`;

  const { data, metadata, results } = await getAllProducts(queries);
  return (
    <div className="container m-auto bg-[#f0f0f0] p-4 truncate">
      <h1 className="text-2xl font-bold my-4  ">All products</h1>
      <div className="mb-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4  gap-4  w-full">
          {results !== 0 ? (
            data.map((product, index) => {
              return <Card key={index} product={product} />;
            })
          ) : (
            <h1 className="text-5xl h-[800px]">Not Found This Data</h1>
          )}
        </div>

        <>
          <FilterPoducts />
        </>
      </div>
      <div className="mb-10">
        <MyPagination metadata={metadata} />
      </div>
    </div>
  );
}

export default products;
