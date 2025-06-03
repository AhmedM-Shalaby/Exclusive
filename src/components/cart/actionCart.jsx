"use client";
import editProductCart from "@/app/actions/cart/editToCart";
import MyButtons from "../MyButton/MyButton";
import { useCartStore } from "@/store/cart_store";
import { useUserStore } from "@/store/user_store";
import { useState } from "react";
import { toast } from "react-toastify";

function MoreActionCart() {
  const { productsEdit, clearEdit, deleteUserCart, setNumOfCartItems } =
    useCartStore();
  const { token } = useUserStore();
  const HAVECHANGE = Boolean(productsEdit.length);
  const [loading, setLoading] = useState(false);

  const saveChange = async () => {
    const loadingToastId = toast.loading("Saving changes...");

    try {
      const res = await Promise.all(
        productsEdit.map((item) => editProductCart(item, token))
      );
      setNumOfCartItems(res[res.length - 1].numOfCartItems);
      clearEdit();

      toast.update(loadingToastId, {
        render: "Saved successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    } catch (error) {
      console.error("Error updating cart:", error);
      toast.update(loadingToastId, {
        render: "Failed to save changes.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    }
  };

  const handleClearUserCart = () => {
    deleteUserCart(token);
  };

  return (
    <div className="flex justify-between items-center">
      <MyButtons
        click={handleClearUserCart}
        context={"Delete All Products "}
        width="fit-content"
        customStyle={{
          backgroundColor: "transparent",
          color: "#000",
          border: "1px solid black",
        }}
      />
      <MyButtons
        click={saveChange}
        context={
          loading ? "Saving..." : HAVECHANGE ? "Save Change" : "Update Cart"
        }
        width="fit-content"
        isDisabled={!HAVECHANGE || loading}
        customStyle={{
          backgroundColor: HAVECHANGE ? "var(--main-color)" : "transparent",
          color: HAVECHANGE ? "#fff" : "#000",
          border: HAVECHANGE ? "none" : "1px solid black",
          opacity: HAVECHANGE && !loading ? 1 : 0.5,
          cursor: HAVECHANGE && !loading ? "pointer" : "not-allowed",
        }}
      />
    </div>
  );
}

export default MoreActionCart;
