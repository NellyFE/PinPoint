import { BiCurrentLocation } from "react-icons/bi";

export const Nav = () => {
  return (
    <nav className="border-2 w-full flex ">
      <div className="max-w-7xl w-full justify-between mx-auto flex px-6 py-4 border border-red-600">

        {/* logo  */}
        <div className="flex">
          <span className="flex items-center text-2xl font-bold">
            Pinp
            <BiCurrentLocation className="mt-2 text-[#00441b]" />
            int
          </span>
        </div>

        {/* get started button */}
        <div className="border bg-[#00441b] rounded-lg px-6 py-2">
            <button className=" text-white ">Get Started</button>
        </div>

      </div>
    </nav>
  );
};
