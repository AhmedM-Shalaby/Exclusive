import { TiStarFullOutline } from "react-icons/ti";
import { IoMdEye } from "react-icons/io";
import Link from "next/link";
import ButtonWishList from "../MyButton/ButtonWishList";

function Card({ product }) {
  const { id, imageCover, title, price, priceAfterDiscount, ratingsAverage } =
    product;

  return (
    <div className=" group">
      <div className=" relative truncate mb-4 rounded-b-[10px]">
        <img src={imageCover} alt={title} className="scale-[1.2] " />
        <div className="icons absolute top-8 right-3 flex flex-col gap-2">
          <ButtonWishList id={id} />
          <Link href={`/products/${id}`} className="p-3 rounded-[50%] bg-white">
            <IoMdEye size={20} />
          </Link>
        </div>
        {priceAfterDiscount ? (
          <div
            className="dis absolute bg-[var(--main-color)] top-3 left-3 py-[4px] px-[12px] text-white rounded-[10px] "
            title="Discount"
          >
            {priceAfterDiscount
              ? (((price - priceAfterDiscount) / price) * 100).toFixed(0)
              : ""}
            %
          </div>
        ) : (
          ""
        )}
        <button
          className="absolute bottom-[-100%] w-full py-4 px-2 bg-black text-white rounded-b-[5px] cursor-pointer

        transition-all duration-300 group-hover:bottom-0"
        >
          Add To Cart
        </button>
      </div>
      <div className="content">
        <p>{title.split(" ").slice(0, 3).join(" ")}</p>
        <div className="price">
          <span className="new text-[var(--main-color)]">
            ${priceAfterDiscount ? priceAfterDiscount : price}{" "}
          </span>
          &nbsp;&nbsp;
          {priceAfterDiscount ? (
            <span className="old line-through text-gray-400">${price}</span>
          ) : null}
          <div className="flex gap-1">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <TiStarFullOutline
                  key={index}
                  size={25}
                  className={`${
                    index < ratingsAverage ? "text-yellow-300" : "text-gray-400"
                  }`}
                />
              ))}
            <p className="text-gray-400">(35)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
