"use client";
import { useCartStore } from "@/store/cart_store";
import { CgCloseO } from "react-icons/cg";

function DeleteProduct({ ProductID, token }) {
  const { fireActionRemove } = useCartStore();
  const handleRemoveProduct = async () => {
    const res = await fireActionRemove(ProductID, token);
    console.log(res);
  };
  return (
    <CgCloseO
      className="text-red-500 cursor-pointer rounded-full"
      onClick={handleRemoveProduct}
      title="Remove Product"
    />
  );
}

export default DeleteProduct;
