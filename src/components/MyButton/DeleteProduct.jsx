"use client";
import removeProductToCart from "@/app/actions/cart/removeProductToCart";
import { useCartStore } from "@/store/cart_store";
import { CgCloseO } from "react-icons/cg";
import { toast } from "react-toastify";

function DeleteProduct({ ProductID, token }) {
  const { setNumOfCartItems } = useCartStore();
  const handleRemoveProduct = async () => {
    try {
      const res = await removeProductToCart(ProductID, token);
      setNumOfCartItems(res.numOfCartItems);
      toast.success(res.message);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
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
