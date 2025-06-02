"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { SlMenu, SlLogout } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";
import { useUserStore } from "@/store/user_store";
import { CiHeart } from "react-icons/ci";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useCartStore } from "@/store/cart_store";
import { useWishListStore } from "@/store/wishList_store";
import SearchBar from "./searchBar";
const Links = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
function MyNav() {
  const { token, setToken, initTokenFromCookie } = useUserStore();
  const { count, fetchWishList } = useWishListStore();
  const { numOfCartItems, fetchCart } = useCartStore();
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const [menu, setMenu] = useState(false);
  const menuUserRef = useRef(null);
  const navMobileRef = useRef(null);
  const router = useRouter();

  const handelLogOut = () => {
    Cookies.remove("token", { path: "/" });
    setToken(null);
    router.replace("/");
  };
  useEffect(() => {
    setIsMounted(true);
    const handleClickOutside = (event) => {
      if (menuUserRef.current && !menuUserRef.current.contains(event.target)) {
        setMenu(false);
      }
      if (
        navMobileRef.current &&
        !navMobileRef.current.contains(event.target)
      ) {
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);

    // Initialize token from cookie + fetch wishlist + fetch Cart
    initTokenFromCookie();
    if (token) {
      fetchWishList(token);
      fetchCart(token);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [token]);

  return (
    <header className=" sticky top-0 z-11">
      <div className="mx-auto container relative">
        <div
          className={`flex  items-center justify-between p-4  absolute w-full top-0 transition-all duration-300 ${
            scrolled ? "bg-[#f9f9f9]" : ""
          }`}
        >
          <div className="flex items-start flex-1 test flex-col md:flex-row md:items-center ">
            <Link
              className="block text-black font-bold text-2xl w-1/3"
              href="/"
            >
              Exclusive
            </Link>
            <nav
              ref={navMobileRef}
              aria-label="Global"
              className={` md:block w-full md:w-1/2  justify-items-start md:justify-items-center max-md:bg-[#e2e2e2ef]
                transition-all duration-500 ease-in-out transform origin-top ${
                  active
                    ? "translate-y-[0%] opacity-100 visible w-full max-md:max-h-[500px]"
                    : " max-md:translate-y-[-100%] max-md:opacity-0 max-md:invisible w-0 max-md:max-h-0"
                }`}
            >
              <ul className=" flex flex-col md:flex-row md:items-center w-full   ">
                {Links.map((Element, index) => (
                  <li
                    key={index}
                    className="p-2"
                    onClick={() => setActive(false)}
                  >
                    <Link
                      className="text-black text-base    transition hover:text-gray-500/75 "
                      href={Element.path}
                    >
                      {Element.name}
                    </Link>
                  </li>
                ))}
                {isMounted && !token && (
                  <>
                    <li className="p-2" onClick={() => setActive(false)}>
                      <Link
                        className="text-black transition hover:text-gray-500/75 text-base "
                        href="/signUp"
                      >
                        Sign UP
                      </Link>
                    </li>
                    <li className="p-2" onClick={() => setActive(false)}>
                      <Link
                        className="text-black transition hover:text-gray-500/75 text-base  "
                        href="/login"
                      >
                        Login
                      </Link>
                    </li>
                  </>
                )}
                <li className=" md:ml-auto ">
                  <SearchBar />
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-row-reverse gap-2 items-center self-start ">
            {isMounted && token && (
              <div className="md:relative flex flex-row-reverse gap-5  ">
                <button
                  type="button"
                  className="overflow-hidden rounded-full  shadow-inner cursor-pointer"
                  ref={menuUserRef}
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenu(!menu);
                  }}
                >
                  <FaUserLarge size={25} />
                </button>
                <div className="relative">
                  <Link href={"/cart"}>
                    <FaShoppingCart size={25} />
                  </Link>
                  {numOfCartItems !== 0 && (
                    <p className="text-white bg-[var(--main-color)] flex justify-center items-center text-[10px] absolute top-[-10px] right-[-10px] rounded-[50%] w-[17px] h-[17px]">
                      {numOfCartItems}
                    </p>
                  )}
                </div>
                <div className="relative">
                  <Link href={"/wishlist"}>
                    <CiHeart size={25} />
                  </Link>
                  {count !== 0 && (
                    <p className="text-white bg-[var(--main-color)] flex justify-center items-center text-[10px] absolute top-[-10px] right-[-10px] rounded-[50%] w-[17px] h-[17px]">
                      {count}
                    </p>
                  )}
                </div>
                <div
                  className={`absolute top-[60px]  md:top-[30px] z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg transition-all duration-300 ease-in-out  ${
                    menu ? " opacity-100 visible" : "  opacity-0 invisible"
                  }`}
                  role="menu"
                >
                  <div className="p-2">
                    <Link
                      href="profile"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      My profile
                    </Link>
                  </div>
                  <div className="p-2">
                    <button
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                      role="menuitem"
                      onClick={() => handelLogOut()}
                    >
                      <SlLogout />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="block md:hidden" onClick={() => setActive(!active)}>
              <button className=" cursor-pointer rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <SlMenu />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MyNav;
