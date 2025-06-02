"use client";

import MyButtons from "@/components/MyButton/MyButton";
import Link from "next/link";

function ErrorPage({ error, reset }) {
  return (
    <section className="container m-auto p-4 text-center">
      <h1 className="text-4xl font-bold mt-8"> {error.message}</h1>
      <div className="mt-8 ">
        <Link href={"/"}>
          <MyButtons context={"Go To Home"} width="25%" />
        </Link>
      </div>
    </section>
  );
}

export default ErrorPage;
