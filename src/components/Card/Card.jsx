import { TiStarFullOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

function Card() {
  return (
    <div className="w-[300px] group">
      <div className=" relative truncate mb-4 ">
        <img
          src="https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg"
          alt="img"
        />
        <div className="icons absolute top-8 right-3 flex flex-col gap-2">
          <p className="p-3 rounded-[50%] bg-white">
            <FaRegHeart size={20} />
          </p>
          <p className="p-3 rounded-[50%] bg-white">
            <IoMdEye size={20} />
          </p>
        </div>
        <div className="dis absolute bg-[var(--main-color)] top-3 left-3 py-[4px] px-[12px] text-white rounded-[10px] ">
          -40%
        </div>
        <button
          className="absolute bottom-[-100%] w-full py-4 px-2 bg-black text-white rounded-b-[5px] cursor-pointer

        transition-all duration-300 group-hover:bottom-0"
        >
          Add To Cart
        </button>
      </div>
      <div className="content">
        <p>AK-900 Wired Keyboard</p>
        <div className="price">
          <span className="new text-[var(--main-color)]">$120 </span>
          &nbsp;&nbsp;
          <span className="old line-through text-gray-400">$160 </span>
          <div className="flex gap-1">
            {Array(5)
              .fill("")
              .map((_, index) => (
                <TiStarFullOutline
                  key={Math.random(1 * 200)}
                  size={25}
                  className={`${
                    index < 4 ? "text-yellow-300" : "text-gray-400"
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
