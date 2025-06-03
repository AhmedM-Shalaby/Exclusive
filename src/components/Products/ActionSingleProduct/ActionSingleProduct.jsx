"use client";
import ButtonWishList from "@/components/MyButton/ButtonWishList";
import MyButtons from "@/components/MyButton/MyButton";
import { useCartStore } from "@/store/cart_store";
import { useUserStore } from "@/store/user_store";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function ActionSingleProduct({ productId }) {
  const { token } = useUserStore();
  const { fireActionAdd } = useCartStore();
  const router = useRouter();
  const handleAdd = async () => {
    if (!token) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }
    fireActionAdd({ productId }, token);
  };
  return (
    <>
      <div className="flex-2">
        <MyButtons context={"Buy Now"} click={handleAdd} />
      </div>
      <div className="border-2 border-gray-500 rounded-full ">
        <ButtonWishList id={productId} />
      </div>
    </>
  );
}

export default ActionSingleProduct;
