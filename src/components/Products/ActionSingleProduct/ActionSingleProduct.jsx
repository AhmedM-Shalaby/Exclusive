"use client";
import addToCart from "@/app/actions/cart/addToCart";
import ButtonWishList from "@/components/MyButton/ButtonWishList";
import MyButtons from "@/components/MyButton/MyButton";
import { useCartStore } from "@/store/cart_store";
import { useUserStore } from "@/store/user_store";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function ActionSingleProduct({ id }) {
  const { token } = useUserStore();
  const { setNumOfCartItems } = useCartStore();

  const router = useRouter();
  const handleAdd = async () => {
    if (!token) {
      toast.error("Please login first");
      router.push("/login");
      return;
    }
    const Body = { productId: id, count: 1 };
    const res = await addToCart(Body, token);
    toast.success(res.message);
    setNumOfCartItems(res.numOfCartItems);
  };
  return (
    <>
      <div className="flex-2">
        <MyButtons context={"Buy Now"} click={handleAdd} />
      </div>
      <div className="border-2 border-gray-500 rounded-full ">
        <ButtonWishList id={id} />
      </div>
    </>
  );
}

export default ActionSingleProduct;
