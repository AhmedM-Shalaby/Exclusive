import getUserWishlist from "@/app/actions/wishlist/getUserWishlist";
import Card from "@/components/Products/Card/Card";
import NoCard from "@/components/Products/NOCard/NoCard";
import { cookies } from "next/headers";

async function page() {
  const cookiesStore = await cookies();
  const tokenCookie = cookiesStore.get("token");
  const token = tokenCookie?.value;

  const data = await getUserWishlist(token);
  console.log(data);

  return (
    <div className={`container m-auto p-4 `}>
      {data.results == 0 ? (
        <NoCard message={`Your WishList Is Empty (${data.data.length})`} />
      ) : (
        <>
          <p className="text-[20px]"> WishList ({data.results})</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.data.items.map((element, index) => (
              <Card key={index} product={element} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default page;
