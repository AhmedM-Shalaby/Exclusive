import getProduct from "@/api/getProduct";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CountCard from "@/components/Count/Counter";
import MyButtons from "@/components/MyButton/MyButton";
import SectionCreateion from "@/components/sections/CreateContent/CreationSection";
import BestSelling from "@/components/sections/Home/BestSelling";
import ProductDetails from "@/components/sections/singleProduct/ProductDetails";
import { TiStarFullOutline } from "react-icons/ti";
const components = {
  bestSelling: <BestSelling />,
};

export default async function productID(props) {
  const params = await props.params;
  const id = params.id;
  const product = await getProduct(id);
  console.log(id);

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
            <>
              <CountCard />
            </>
            <p>{product.description}</p>
            <div>
              <MyButtons context={"Buy Now"} />
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
