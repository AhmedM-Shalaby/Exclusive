import getUserWishlist from "@/app/actions/wishlist/getUserWishlist";
import Card from "@/components/Card/Card";
import MyButtons from "@/components/MyButton/MyButton";
import { cookies } from "next/headers";
import Link from "next/link";

async function page() {
  const cookiesStore = await cookies();
  const tokenCookie = cookiesStore.get("token");
  const token = tokenCookie?.value;
  console.log(token);

  const data = await getUserWishlist(token);
  console.log(data);

  return (
    <div className={`container m-auto p-4 `}>
      {data.data.length !== 0 ? (
        <p className="text-[20px]"> WishList ({data.count})</p>
      ) : (
        <h1 className="text-2xl font-bold ">Go To See All Products</h1>
      )}
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.data.length == 0 ? (
          <Link href={"/products"}>
            <MyButtons context={"View All Products"} />
          </Link>
        ) : (
          data.data.map((element) => {
            return <Card key={Math.random(200)} product={element} />;
          })
        )}
      </div>
    </div>
  );
}

export default page;
