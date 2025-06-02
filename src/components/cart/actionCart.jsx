"use client";
import editProductCart from "@/app/actions/cart/editToCart";
import MyButtons from "../MyButton/MyButton";
import { useCartStore } from "@/store/cart_store";
import { useUserStore } from "@/store/user_store";

function MoreActionCart() {
  const { productsEdit, clearEdit, deleteUserCart, setNumOfCartItems } =
    useCartStore();
  const { token } = useUserStore();
  const HAVECHANGE = Boolean(productsEdit.length);
  const saveChange = async () => {
    const res = await Promise.all(
      productsEdit.map((item) => editProductCart(item, token))
    );
    setNumOfCartItems(res[res.length - 1].numOfCartItems);
    clearEdit();
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
        context={HAVECHANGE ? "Save Change" : "Update Cart"}
        width="fit-content"
        isDisabled={!HAVECHANGE}
        customStyle={{
          backgroundColor: HAVECHANGE ? "var(--main-color)" : "transparent",
          color: HAVECHANGE ? "#fff" : "#000",
          border: HAVECHANGE ? "none" : "1px solid black",
          opacity: HAVECHANGE ? 1 : 0.5,
          cursor: HAVECHANGE ? "pointer" : "not-allowed",
        }}
      />
    </div>
  );
}

export default MoreActionCart;
