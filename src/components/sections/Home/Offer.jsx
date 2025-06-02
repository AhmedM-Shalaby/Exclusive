import { gatCategoy } from "@/app/actions/products/getCategory";
import Image from "next/image";
import Link from "next/link";

async function Offer() {
  const { data } = await gatCategoy();
  return (
    <>
      <div className="container m-auto flex flex-row mb-20">
        <div className="text-gray-700 w-64 flex-shrink-0 hidden xl:block">
          <nav className="py-6">
            <ul>
              {data.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8 ease-in-out duration-300 transform hover:translate-x-4"
                >
                  <Link href={`/products?category=${item._id}`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="border-l border-gray-300 hidden xl:block"></div>

        <div className="flex xl:my-10 xl:ml-10 xl:gap-16 items-center justify-between flex-col-reverse md:flex-row md:h-96 bg-black text-white w-full">
          {/* المحتوى النصي */}
          <div className="flex flex-col md:max-w-72 gap-5 items-center md:items-start justify-center md:ml-16">
            <div className="max-w-72 flex justify-center items-center gap-6">
              <Image src="/apple.png" alt="apple" width={50} height={50} />
              <h1 className="text-lg">iPhone 14 Series</h1>
            </div>
            <h2 className="text-xl md:text-5xl leading-10">
              Up to 10% off Voucher
            </h2>
            <Link href="/products">
              <button className="mb-8 md:mb-0 flex gap-2 underline underline-offset-8 py-2 px-6 focus:underline-offset-2 ease-in-out duration-300 transform hover:translate-x-4">
                <span>Shop Now</span>
                <svg
                  className="mt-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 12H20M20 12L13 5M20 12L13 19"
                    stroke="#FAFAFA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>

          <div className="relative overflow-hidden mt-4">
            <div className="transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
              <Link href="/products">
                <Image
                  src="/Iphone.jpg"
                  alt="Phone"
                  width={500}
                  height={300}
                  className="transition-transform duration-300 transform translate-y-4 hover:translate-y-0 hover:scale-102 hover:motion-safe:animate-pulse"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
