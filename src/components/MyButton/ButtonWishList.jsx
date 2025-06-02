"use client";
import { useWishListStore } from "@/store/wishList_store";
import { useUserStore } from "@/store/user_store";
import { FaRegHeart, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function ButtonWishList({ id }) {
  const { token } = useUserStore();
  const { activeIds, removeProduct, addProduct } = useWishListStore();
  const router = useRouter();

  const isActive = activeIds.includes(id);
  const handleAddWishList = async () => {
    if (!token) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }
    if (!isActive) {
      addProduct(id, token);
    } else {
      removeProduct(id, token);
    }
  };

  return (
    <button
      type="button"
      className={`p-3 rounded-[50%] cursor-pointer transition-all duration-300          bg-white hover:bg-red-500 hover:text-white
      `}
      onClick={handleAddWishList}
    >
      {!isActive ? <FaRegHeart size={20} /> : <FaTrashAlt size={20} />}
    </button>
  );
}

export default ButtonWishList;
