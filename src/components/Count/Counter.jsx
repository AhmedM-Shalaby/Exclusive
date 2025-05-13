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
    <div>
      <div>
        <label htmlFor="Quantity" className="sr-only">
          {" "}
          Quantity{" "}
        </label>

        <div className="flex items-center gap-1">
          <MyButtons
            context={"-"}
            width="20%"
            click={() => handelDecrementCount()}
            customStyle={{ borderRadius: "10px", fontSize: "24px" }}
          />
          <p className="w-50 text-center">{count}</p>
          <MyButtons
            context={"+"}
            width="20%"
            click={() => handelIncrementCount()}
            customStyle={{ borderRadius: "10px", fontSize: "24px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default CountCard;
