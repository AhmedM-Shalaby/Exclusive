"use client";
import { getAllProducts } from "@/app/actions/products/getAllProducts";
import { useSearch } from "@/store/seach_store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
function ModelSearch() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { isSearch, setIsSearch } = useSearch();
  const handleKey = (event) => {
    if (event.key == "Escape") {
      setIsSearch(!isSearch);
    }
  };
  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const getProduct = async () => {
      const data = await getAllProducts();
      setProducts(data.data);
    };

    getProduct();
  }, []);

  return (
    <>
      {isSearch && (
        <div
          className="fixed top-0 left-0 inset-0 z-50 grid place-content-center bg-black/50  p-4 transition-all duration-300 "
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          onKeyDown={handleKey}
        >
          <div className="w-full  lg:min-w-2xl  rounded-lg bg-white px-6 py-8 shadow-lg relative max-h-[600px] overflow-y-auto transition-all duration-300">
            <div className="flex items-start justify-between">
              <input
                type="search"
                placeholder="search Products"
                className="outline-0 w-full bg-[#eee] p-4"
                onChange={handleSearchInput}
              />
              <button
                type="button"
                className="absolute top-0 right-0 text-6xl rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none"
                aria-label="Close"
                onClick={() => setIsSearch(!isSearch)}
              >
                <IoCloseSharp size={20} />
              </button>
              <p className="absolute top-0 left-0 bg-[#f0f0f0] text-[14px] p-1 font-bold text-[#aaa] rounded-tl-2xl rounded-br-xl">
                ESC
              </p>
            </div>

            <div className="mt-4">
              <div>
                {products
                  ?.filter((item) =>
                    searchQuery !== ""
                      ? item.title.toLowerCase().includes(searchQuery)
                      : ""
                  )
                  .map((item) => (
                    <Link
                      href={`/products/${item._id}`}
                      key={item._id}
                      onClick={() => setIsSearch(!isSearch)}
                      className="flex items-center mb-4 bg-[#fafafa]"
                    >
                      {" "}
                      <Image
                        src={item.imageCover}
                        alt={item.title}
                        width={500}
                        height={300}
                        className="w-[50px] "
                      />{" "}
                      <span>
                        {" "}
                        {item.title.split(" ").slice(0, 4).join(" ")}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModelSearch;
