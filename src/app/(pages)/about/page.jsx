import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import StateUs from "@/components/sections/About/Stateus";
import Image from "next/image";
import Teams from "./../../../components/sections/About/Teams";

function About() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];
  return (
    <>
      <div className="text-2xl p-8">
        <Breadcrumb crumbs={crumbs} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-10">
        <div>
          <Image
            src={"/img2.jpg"}
            width={800}
            height={900}
            alt="imgPerson"
            className="w-full"
          />
        </div>
        <div className=" p-8">
          <div className="w-[60%] m-auto text-xl font-semibold">
            <h1 className="text-4xl font-bold mb-10">Our Story</h1>
            <p className="">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="my-20 w-[80%]">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
      </div>
      <div className="container m-auto">
        <StateUs />
        <Teams />
      </div>
    </>
  );
}

export default About;
