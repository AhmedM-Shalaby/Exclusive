import { FaTruck, FaHeadset, FaMoneyBillWave } from "react-icons/fa";
function Features() {
  const feature = [
    {
      head: " FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140",
      icon: <FaTruck className="text-2xl font-medium  text-white" />,
    },
    {
      head: " 24/7 CUSTOMER SERVICE",
      text: "Friendly 24/7 customer support",
      icon: <FaHeadset className="text-2xl font-medium text-white" />,
    },
    {
      head: " MONEY BACK GUARANTEE",
      text: " We return money within 30 days",
      icon: <FaMoneyBillWave className="text-2xl font-medium  text-white" />,
    },
  ];
  return (
    <div className="bg-white py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {feature.map((feat, index) => (
          <div
            className="flex flex-col items-center text-center "
            key={feat.head + index}
          >
            <div className="bg-black w-[70px] h-[70px] rounded-full flex justify-center items-center mb-10 feat transition-all duration-300 hover:scale-150 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              {feat.icon}
            </div>
            <h3 className="text-lg font-bold uppercase mb-1">{feat.head}</h3>
            <p className="text-sm text-gray-600">{feat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
