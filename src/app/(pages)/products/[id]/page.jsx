import getProduct from "@/app/actions/products/getProduct";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import SectionCreateion from "@/components/sections/CreateContent/CreationSection";
import BestSelling from "@/components/sections/Home/BestSelling";
import ProductDetails from "@/components/sections/singleProduct/ProductDetails";
import { TiStarFullOutline } from "react-icons/ti";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import ActionSingleProduct from "@/components/Products/ActionSingleProduct/ActionSingleProduct";

const components = {
  bestSelling: <BestSelling />,
};

export default async function productID(props) {
  const params = await props.params;
  const id = params.id;
  const product = await getProduct(id);
  // if (product == undefined) {
  //   throw new Error(
  //     `Fetch failed: ${prstatusoduct.} ${product.statusText} ${product.errors?.msg}`
  //   );
  // }

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "products", path: "/products" },
    { name: product.title, path: `/products/${id}` },
  ];

  return (
    <div className="container m-auto px-4 my-10">
      <Breadcrumb crumbs={crumbs} />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10 ">
        <div className="img col-span-2 ">
          <ProductDetails product={product} />
        </div>
        <div className="content">
          <div>
            <h1 className="text-[24px] mb-4">{product.title}</h1>
            <div className="rate flex mb-4">
              {Array(5)
                .fill("")
                .map((_, index) => (
                  <TiStarFullOutline
                    key={index}
                    size={25}
                    className={`${
                      index < product.ratingsAverage
                        ? "text-yellow-300"
                        : "text-gray-400"
                    }`}
                  />
                ))}
              <span>
                ( {product.ratingsQuantity} Reviews) |{" "}
                <span className="text-[#00FF66]"> In Stock</span>{" "}
              </span>
            </div>
            <p>{product.description}</p>
            <div className="price flex gap-6">
              <p className="text-[24px] mb-4">
                $
                {product.priceAfterDiscount
                  ? product.priceAfterDiscount
                  : product.price}
              </p>
              {product.priceAfterDiscount && (
                <p className="text-[24px] old line-through text-gray-400 mb-4">
                  ${product.price}
                </p>
              )}
              {product.priceAfterDiscount && (
                <p className=" bg-[var(--main-color)]  p-3 text-white rounded-[10px]">
                  {product.priceAfterDiscount
                    ? `Discount  ${(
                        ((product.price - product.priceAfterDiscount) /
                          product.price) *
                        100
                      ).toFixed(0)}`
                    : ""}
                  %
                </p>
              )}
            </div>

            <div className="flex justify-center items-center gap-4">
              <ActionSingleProduct id={id} />
            </div>
            <div className="border border-black cursor-pointer">
              <div className="flex justify-around items-center p-4">
                <div className="text-4xl mr-4">
                  <CiDeliveryTruck />
                </div>
                <div className="flex-1 font-semibold">
                  <p className="text-lg ">Free Delivery</p>
                  <p className="text-xs underline">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-black"></div>
              <div className="flex justify-around items-center p-4">
                <div className="text-3xl mr-4">
                  <GiReturnArrow />
                </div>
                <div className="flex-1 font-semibold">
                  <p className="text-lg ">Return Delivery</p>
                  <p className="text-xs">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionCreateion head={"Related Item"}>
        {components["bestSelling"]}
      </SectionCreateion>
    </div>
  );
}
