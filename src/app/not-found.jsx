import MyButtons from "@/components/MyButton/MyButton";
import Link from "next/link";

function notFound() {
  return (
    <div className="container m-auto p-4 text-center">
      <h1 className=" text-9xl font-bold text-black mb-10">404 Not Found</h1>
      <p className=" font-bold mb-10">
        Your visited page not found. You may go home page.
      </p>
      <Link href={"/"}>
        <MyButtons context={"Back to home page"} width="auto" />
      </Link>
    </div>
  );
}

export default notFound;
