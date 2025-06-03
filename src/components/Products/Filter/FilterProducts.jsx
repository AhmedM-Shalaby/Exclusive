"use client";
import { useEffect, useState } from "react";
import "./style.css";
import { useFormik } from "formik";
import { inputSort } from "../constant";
import { gatCategoy } from "@/app/actions/products/getCategory";
import { useRouter } from "next/navigation";
import MyButtons from "@/components/MyButton/MyButton";
import { BiFilterAlt } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";
import PriceRangeSlider from "./PriceRange";

function FilterPoducts() {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(false);
  const router = useRouter();
  const initialValues = {
    minPrice: "0",
    maxPrice: "10000",
    sortBy: "",
    category: "",
  };

  const onSubmit = (values) => {
    console.log(values);

    const params = new URLSearchParams();
    if (values.sortBy) {
      params.append("sort", values.sortBy);
    }

    if (values.category) {
      params.append("category", values.category);
    }

    const query = params.toString();
    setActive(!active);
    router.push(`/products?${query}`);
  };
  const MyFilterForm = useFormik({
    initialValues,
    onSubmit,
  });
  const { handleChange, values, setFieldValue } = MyFilterForm;
  useEffect(() => {
    async function fetchData() {
      const data = await gatCategoy();
      setCategories(data.data);
    }
    fetchData();
  }, []);

  return (
    <div
      className={`w-[100%] lg:w-[30%] bg-white p-4 absolute ${
        !active ? "right-[-104%] lg:right-[-32%]" : "right-0"
      } top-0 transition-all duration-300 `}
    >
      <h1 className="text-xl font-bold">Filter</h1>
      <div
        className={`icon absolute transition-all duration-300  top-[-8%] ${
          !active ? "left-[-15%] md:left-[-20%]" : "left-0"
        }  bg-white`}
        onClick={() => setActive(!active)}
      >
        {!active ? <BiFilterAlt size={50} /> : <CgCloseR size={50} />}
      </div>
      <form onSubmit={MyFilterForm.handleSubmit}>
        <div>
          <div>
            <PriceRangeSlider
              minValue={values.minPrice}
              maxValue={values.maxPrice}
              handleChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold mb-4 w-full">Sort By </p>
            <select
              name="sortBy"
              value={values.sortBy}
              onChange={handleChange}
              className="w-full rounded-lg border  text-sm shadow-lg text-slate-700 focus:outline-none  bg-white px-4 py-2 "
            >
              <option value="" disabled hidden>
                Choose the order
              </option>
              {inputSort.map((element) => (
                <option key={element.id} value={element.value}>
                  {element.placeHoder}
                </option>
              ))}
            </select>
            <p className="text-lg font-semibold my-4 ">Categories</p>
            <div className="grid grid-cols-2 gap-6">
              {categories.map((category) => (
                <div className="text-sm shadow-lg p-1" key={category.slug}>
                  <label className="text-center">
                    <input
                      type="radio"
                      name="category"
                      value={category._id}
                      checked={values.category === category.slug}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <p
                      className={`flex items-center justify-center cursor-pointer rounded-lg border-none py-3 transition-all duration-150 font-semibold ${
                        values.category === category._id
                          ? "bg-[var(--main-color)] font-bold text-white"
                          : "text-slate-700"
                      }`}
                    >
                      {category.name}
                    </p>
                  </label>
                </div>
              ))}
              <div className="text-sm shadow-lg p-1">
                <label className="text-center">
                  <input
                    type="radio"
                    name="category"
                    value=""
                    checked={values.category === ""}
                    onChange={handleChange}
                    className="hidden"
                  />
                  <p
                    className={`flex items-center justify-center cursor-pointer rounded-lg border-none py-3 transition-all duration-150 ${
                      values.category == ""
                        ? "bg-[var(--main-color)] font-semibold text-white"
                        : "text-slate-700"
                    }`}
                  >
                    All
                  </p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="text-ce">
          <MyButtons
            state="submit"
            context={"Go to filtered products"}
            customStyle={{ width: "fit-content" }}
          />
        </div>
      </form>
    </div>
  );
}

export default FilterPoducts;
