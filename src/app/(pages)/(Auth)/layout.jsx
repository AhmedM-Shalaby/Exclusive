import Image from "next/image";

function pageAuth({ children }) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        <div className="img w-full md:w-[50%]">
          <Image
            src="/img1.jpg"
            width={805}
            height={781}
            alt="Phone"
            className="w-full"
          />
        </div>
        <div className="content w-full md:w-[40%] p-5 m-auto ">{children}</div>
      </div>
    </>
  );
}

export default pageAuth;
