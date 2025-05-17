"use client";
import { useState } from "react";
import MyButtons from "../MyButton/MyButton";
import { toast } from "react-toastify";

function CountCard() {
  const [count, setCount] = useState(1);
  const handelIncrementCount = () => {
    setCount(count + 1);
  };
  const handelDecrementCount = () => {
    if (count == 1) {
      toast.error("count It can't be less 1");
    } else {
      setCount(count - 1);
    }
  };
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
      <p className="grow-1 text-center">{count}</p>
      <div className="border-l border-gray-500">
        <MyButtons
          context={"+"}
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
