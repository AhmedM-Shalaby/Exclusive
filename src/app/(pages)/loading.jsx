import { HashLoader } from "react-spinners";

function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <HashLoader size={200} />
    </div>
  );
}

export default loading;
