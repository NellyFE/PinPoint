import { BiCurrentLocation } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate()
  return (
    <nav className=" w-full flex ">
      <div className="max-w-7xl w-full justify-between mx-auto flex px-6 py-4 ">

        {/* logo  */}
        <div className="flex">
          <span className="flex items-center text-2xl font-bold">
            Pinp
            <BiCurrentLocation className="mt-2 text-[#00441b]" />
            int
          </span>
        </div>

        {/* get started button */}
        <div onClick={() => navigate("/app")} className=" bg-[#00441b] text-white rounded-lg px-6 py-2 border-2 border-transparent hover:border-[#00441b] hover:text-[#00441b] hover:bg-transparent transition-all duration-300 cursor-pointer">
            <button className="cursor-pointer  ">Get Started</button>
        </div>

      </div>
    </nav>
  );
};
