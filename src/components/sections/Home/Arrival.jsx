"use client";
import Link from "next/link";
import Image from "next/image";

const ShopNowIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M3.5 12H20M20 12L13 5M20 12L13 19"
      stroke="#FAFAFA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Arrival() {
  return (
    <div className="flex flex-col xl:flex-row gap-6">
      {/* PlayStation Section */}
      <div className="bg-black rounded-md p-6 h-[500px] w-full">
        <div className="relative text-white flex flex-col-reverse md:flex-row items-center h-full gap-4">
          <div className="absolute inset-0 z-0 overflow-hidden rounded-md">
            <Link href="/products">
              <Image
                src="/ps5.png"
                alt="PlayStation 5"
                layout="fill"
                objectFit="cover"
                className="opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-105"
              />
            </Link>
          </div>
          <div className="relative z-10 flex flex-col gap-2 items-center md:items-start text-center md:text-left max-w-[240px]">
            <h2 className="text-lg font-semibold">PlayStation 5</h2>
            <p className="text-sm">
              Black and White version of the PS5 on sale.
            </p>
            <Link href="/products">
              <button className="text-sm underline underline-offset-4 hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                Shop Now
                {ShopNowIcon}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side Sections */}
      <div className="flex flex-col justify-between gap-6 w-full">
        {/* Women's Collections */}
        <div className="bg-black rounded-md h-full relative flex items-center">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Link href="/products">
              <Image
                src="/women.jpg"
                alt="Women's Collections"
                layout="fill"
                objectFit="cover"
                className="opacity-50 hover:opacity-100 transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>
          <div className="relative z-10 pl-6 text-white">
            <h2 className="text-base font-semibold">Women’s Collections</h2>
            <p className="text-sm">Featured collections with a unique vibe.</p>
            <Link href="/products">
              <button className="mt-2 text-sm underline underline-offset-4 hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                Shop Now
                {ShopNowIcon}
              </button>
            </Link>
          </div>
        </div>

        {/* Speakers & Perfume */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Speaker */}
          <div className="bg-black rounded-md h-[200px] flex-1 relative flex items-center">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Link href="/products">
                <Image
                  src="/speakers.png"
                  alt="Speaker"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-50 hover:opacity-100 transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>
            <div className="relative z-10 pl-4 text-white">
              <h2 className="text-base font-semibold">Speakers</h2>
              <p className="text-sm">Amazon wireless speakers</p>
              <Link href="/products">
                <button className="mt-2 text-sm underline underline-offset-4 hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                  Shop Now
                  {ShopNowIcon}
                </button>
              </Link>
            </div>
          </div>

          {/* Perfume */}
          <div className="bg-black rounded-md h-[200px] flex-1 relative flex items-center">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Link href="/products">
                <Image
                  src="/perfume.png"
                  alt="Perfume"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-50 hover:opacity-100 transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </div>
            <div className="relative z-10 pl-4 text-white">
              <h2 className="text-base font-semibold">Perfume</h2>
              <p className="text-sm">GUCCI INTENSE OUD EDP</p>
              <Link href="/products">
                <button className="mt-2 text-sm underline underline-offset-4 hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                  Shop Now
                  {ShopNowIcon}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Arrival;
