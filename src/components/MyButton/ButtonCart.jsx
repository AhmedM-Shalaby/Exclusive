"use client";
import { useUserStore } from "@/store/user_store";
import { toast } from "react-toastify";
import { useCartStore } from "@/store/cart_store";
import { useRouter } from "next/navigation";

function ButtonCart({ productId }) {
  const { token } = useUserStore();
  const { fireActionAdd } = useCartStore();
  const router = useRouter();

  const handleClick = async () => {
    if (!token) {
      toast.error("Please login first");
      router.replace("/login");
      return;
    }
    fireActionAdd({ productId }, token);
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
