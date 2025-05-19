"use client";

import { useCartStore } from "@/store/cart_store";
import { CgCloseO } from "react-icons/cg";

function DeleteProduct({ ProductID, token }) {
  const { deleteProduct } = useCartStore();

  const handleRemoveProduct = async () => {
    try {
      await deleteProduct(ProductID, token);
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
