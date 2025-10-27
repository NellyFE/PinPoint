import { useNavigate } from "react-router-dom";

export const Button = () => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate("/app")} className=" bg-[#00441b] border-2 border-transparent rounded-lg px-6 hover:bg-transparent py-2 hover:border-white transition-all duration-300 cursor-pointer">
      <button className=" text-white ">Get&nbsp;Started</button>
    </div>
  );
};
