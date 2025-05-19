import MyButtons from "@/components/MyButton/MyButton";
import Link from "next/link";

function NoCard({ message }) {
  return (
    <div className="conatainer m-auto  flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl md:text-6xl font-bold mb-8">{message}</h1>
        <p className="text-xl md:text-3xl font-bold ">Go To See All Products</p>
        <Link href={"/products"}>
          <MyButtons context={"View All Products"} width="fit-content" />
        </Link>
      </div>
    </div>
  );
}

export default NoCard;
