"use client";
import { useEffect, useState } from "react";
import MyButtons from "../MyButton/MyButton";
import { toast } from "react-toastify";
import { useCartStore } from "@/store/cart_store";

function CountCard({ MyCount, id }) {
  const [isChange, setIsChange] = useState(false);
  const { setProductsEdit } = useCartStore();

  const [count, setCount] = useState(MyCount || 1);
  const handelIncrementCount = () => {
    setCount(count + 1);
    setIsChange(true);
  };
  const handelDecrementCount = () => {
    if (count == 1) {
      toast.error("count It can't be less 1");
    } else {
      setCount(count - 1);
    }
    setIsChange(true);
  };
  useEffect(() => {
    if (isChange) {
      const newEdit = { productID: id, count };
      setProductsEdit(newEdit);

      setIsChange(false);
    }
  }, [count, id, isChange, setProductsEdit]);
  return (
    <div className="flex items-center justify-center border rounded-[5px] border-gray-500">
      <div className="border-r border-gray-500">
        <MyButtons
          context={"-"}
          click={() => handelDecrementCount()}
          width="fit-content"
          bgcolor="bg-white"
          customStyle={{
            borderRadius: "5px",
            padding: "5px 10px",
            fontSize: "20px",
            margin: "0",
            backgroundColor: "#ffffff",
            color: "#000",
          }}
        />
      </div>
      <p className="grow-1 text-center w-12.5">{count}</p>
      <div className="border-l  border-gray-500">
        <MyButtons
          context={"+"}
          width="fit-content"
          click={() => handelIncrementCount()}
          customStyle={{
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            padding: "5px 10px",
            fontSize: "20px",
            margin: "0",
          }}
        />
      </div>
    </div>
  );
}

export default CountCard;
