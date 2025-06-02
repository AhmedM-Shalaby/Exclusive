import { TiStarFullOutline } from "react-icons/ti";
import { IoMdEye } from "react-icons/io";
import Link from "next/link";
import ButtonWishList from "@/components/MyButton/ButtonWishList";
import Image from "next/image";
import ButtonCart from "@/components/MyButton/ButtonCart";

function Card({ product }) {
  const {
    _id,
    imageCover,
    category,
    title,
    price,
    priceAfterDiscount,
    ratingsAverage,
    sold,
  } = product;
  return (
    <div className=" group">
      <div className=" relative truncate mb-4 rounded-b-[10px]">
        <Image
          src={imageCover ? imageCover : "https://placehold.co/600x400"}
          alt={title}
          width={600}
          height={900}
          className="scale-[1.2] "
        />
        <div className="icons absolute top-8 right-3 flex flex-col gap-2">
          <ButtonWishList id={_id} />
          <Link
            href={`/products/${_id}`}
            className="p-3 rounded-[50%] bg-white"
          >
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
        <ButtonCart id={_id} />
      </div>
      <div className="content">
        <p className="text-xl font-semibold">
          {title.split(" ").slice(0, 3).join(" ")}
        </p>
        <p className="text-md font-semibold text-gray-400">
          Collection : {category?.name}
        </p>
        <div className="price">
          <div>
            <p className="text-[var(--main-color)] font-semibold">
              price : ${priceAfterDiscount ? priceAfterDiscount : price}
            </p>
            {priceAfterDiscount ? (
              <span className="old line-through text-gray-400">${price}</span>
            ) : null}
          </div>
          <div className="flex gap-4">
            <TiStarFullOutline size={25} className="text-yellow-300" />
            <p className="text-gray-400">({ratingsAverage})</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
