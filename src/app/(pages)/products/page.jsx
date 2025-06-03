import { getAllProducts } from "@/app/actions/products/getAllProducts";
import MyPagination from "@/components/Pagination/Pagination";
import Card from "@/components/Products/Card/Card";
import FilterPoducts from "@/components/Products/Filter/FilterProducts";

async function products({ searchParams }) {
  const { sort, category, page, minPrice, maxPrice } = await searchParams;
  const queries = new URLSearchParams({ limit: "8", page: String(page || 1) });

  if (sort) queries.append("sort", sort);
  if (category) queries.append("category", category);
  if (maxPrice) queries.append("price[lt]", maxPrice);
  if (minPrice && Number(minPrice) != 0) queries.append("price[gt]", minPrice);

  const queryString = `?${queries.toString()}`;

  const { data, metadata, results } = await getAllProducts(queryString);
  console.log(queryString);

  return (
    <div className="container m-auto bg-[#f0f0f0] p-4 truncate min-h-[1000px]">
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
