import { BounceLoader } from "react-spinners";

function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <BounceLoader size={198} />
    </div>
  );
}

export default loading;
