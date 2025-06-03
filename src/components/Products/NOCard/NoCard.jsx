import MyButtons from "@/components/MyButton/MyButton";
import Link from "next/link";

function NoCard() {
  return (
    <div className="conatainer m-auto  flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl md:text-6xl font-bold mb-8">
          Your Cart IS Empty{" "}
        </h1>
        <p className="text-xl md:text-3xl font-bold ">Go To See All Products</p>
        <Link href={"/"}>
          <MyButtons context={"Go To Home"} width="fit-content" />
        </Link>
        <Link href={"/products"} className="mx-4">
          <MyButtons context={"View All Products"} width="fit-content" />
        </Link>
      </div>
    </div>
  );
}

export default NoCard;
