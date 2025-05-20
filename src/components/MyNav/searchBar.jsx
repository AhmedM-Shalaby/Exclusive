"use client";
import { useSearch } from "@/store/seach";
import { CiSearch } from "react-icons/ci";
function SearchBar() {
  const { isSearch, setIsSearch } = useSearch();

  return (
    <>
      <div
        className="flex justify-around items-center  px-4 py-2 rounded-full bg-[#eee] cursor-pointer gap-2"
        onClick={() => setIsSearch(!isSearch)}
      >
        <p className="hidden xl:block">Clikc Here </p>
        <CiSearch className="font-bold" size={20} />
      </div>
    </>
  );
}

export default SearchBar;
