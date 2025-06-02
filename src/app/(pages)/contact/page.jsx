import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MyButtons from "@/components/MyButton/MyButton";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Contact() {
  const crumb = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div className="container m-auto my-20">
      <div className="mb-10">
        <Breadcrumb crumbs={crumb} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          className=" p-6 rounded-lg"
          style={{ boxShadow: "0 0  20px #a6a6a6" }}
        >
          <div>
            <h1 className="text-xl flex gap-6 font-bold items-center mb-6">
              <span className="bg-[var(--main-color)] text-white rounded-full text-2xl p-2">
                <IoIosCall />
              </span>
              Call To Us
            </h1>
            <div className="text-md font-semibold">
              <p className="mb-6">We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <div className="w-full h-[2px] bg-gray-300 my-8"></div>
            <h1 className="text-xl flex gap-6 font-bold items-center mb-6">
              <span className="bg-[var(--main-color)] text-white rounded-full text-2xl p-2">
                <MdEmail />
              </span>
              Write To US
            </h1>
            <div className="text-md font-semibold">
              <p className="mb-6  ">
                Fill out our form and we will contact <br /> you within 24
                hours.
              </p>
              <p className="mb-6">Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>
        <div
          className=" col-span-2 p-6 rounded-lg"
          style={{ boxShadow: "0 0  20px #a6a6a6" }}
        >
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="bg-[#eee] p-4 outline-0 rounded-md cursor-pointer"
              />
              <input
                type="text"
                placeholder="Your Email"
                required
                className="bg-[#eee] p-4 outline-0 rounded-md cursor-pointer"
              />
              <input
                type="text"
                placeholder="Your phone"
                required
                className="bg-[#eee] p-4 outline-0 rounded-md cursor-pointer"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="w-full min-h-[370px] border border-gray-500 outline-0 rounded-md p-4 cursor-pointer"
            />
            <div className="text-end">
              <MyButtons context={"Send Message"} width="fit-content" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
