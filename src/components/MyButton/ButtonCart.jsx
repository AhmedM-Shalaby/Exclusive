"use client";
import { useUserStore } from "@/store/user_store";
import { toast } from "react-toastify";
import { useCartStore } from "@/store/cart_store";
import { useRouter } from "next/navigation";
import addToCart from "@/app/actions/cart/addToCart";

function ButtonCart({ id }) {
  const { token } = useUserStore();
  const { setNumOfCartItems } = useCartStore();
  const router = useRouter();

  const handleClick = async () => {
    if (!token) {
      toast.error("Please login first");
      router.replace("/login");
      return;
    }
    if (token) {
      const body = {
        productId: id,
        count: 1,
      };
      const res = await addToCart(body, token);
      toast.success(res.message);
      setNumOfCartItems(res.numOfCartItems);
    }
  };
  return (
    <button
      className="absolute bottom-[-100%] w-full py-4 px-2 bg-black text-white rounded-b-[5px] cursor-pointer transition-all duration-300 group-hover:bottom-0"
      onClick={handleClick}
    >
      Add To Cart
    </button>
  );
}

export default ButtonCart;
