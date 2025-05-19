import Link from "next/link";

function HeaderPage() {
  return (
    <div className="bg-black text-white text-sm px-4 py-2">
      <div className=" mx-auto flex justify-center items-center">
        <div className="text-center text-xs md:text-sm">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href="/products" className="font-bold underline ml-1">
            ShopNow
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderPage;
