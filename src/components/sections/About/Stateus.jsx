"use client";

import { useState } from "react";
import { CiShop, CiBag1, CiBadgeDollar } from "react-icons/ci";
import { TbMoneybag } from "react-icons/tb";

function StateUs() {
  const state = [
    {
      icon: <CiShop size={50} />,
      numberState: 10.5,
      des: "Sallers active our site",
    },
    {
      icon: <CiBadgeDollar size={50} />,
      numberState: 33,
      des: "Mopnthly Produduct Sale",
    },
    {
      icon: <CiBag1 size={50} />,
      numberState: 45.5,
      des: "Customer active in our site",
    },
    {
      icon: <TbMoneybag size={50} />,
      numberState: 25,
      des: "Anual gross sale in our site",
    },
  ];
  const [active, setActive] = useState(1);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container gap-8 m-auto  mt-30">
      {state.map((element, index) => (
        <div
          className={`border border-gray-500 flex flex-col items-center p-8 rounded-xl ${
            active == index ? "bg-[var(--main-color)]" : ""
          }`}
          key={index}
          onClick={() => setActive(index)}
        >
          <div
            className={`${
              active == index ? "bg-white text-black" : "bg-black text-white"
            } p-4 rounded-full shadow-2xl `}
            style={{
              boxShadow: `0 0px 55px ${
                active == index ? "#fff" : "var(--main-color)"
              }`,
            }}
          >
            {element.icon}
          </div>
          <p
            className={`${
              active == index ? "text-white" : "text-black"
            } text-4xl font-bold  mt-6`}
          >
            {element.numberState} K
          </p>
          <p
            className={`${
              active == index ? "text-white" : "text-black"
            } text-base font-bold  mt-6`}
          >
            {element.des} K
          </p>
        </div>
      ))}
    </div>
  );
}

export default StateUs;
