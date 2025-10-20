import { BiCurrentLocation } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";


export default function Sidebar({destinations, setDestinations}) {

    const handleAdd = () =>{
        console.log('add button clicked')
    }

    const handleExport = () => {
        console.log('export button clicked')
    }

    return(
        <div className="sidebar">

             {/* logo  */}
                    <div className="flex border-b border-[#e5e7eb] px-8 py-2">
                      <span className="flex items-center text-2xl font-bold">
                        Pinp
                        <BiCurrentLocation className="mt-2 text-[#00441b]" />
                        int
                      </span>
                    </div>

            {/* Header */}
            <div className="p-6 border-b border-[#e5e7eb]">
                <h1 className="font-bold text-2xl items-center flex gap-2"><SlLocationPin className="text-[#00441b]" /> Wishlist</h1>
                <p className="flex text-sm text-gray-400 ml-2">
                    {destinations.length} destination{destinations.length !== 1 ? 's' : ""}
                    </p>
            </div>

            {/* Button */}
            <div className="p-6 flex gap-[0.5rem]">
                <button onClick={handleAdd} 
            className="flex flex-1 py-2 gap-1.5 font-semibold text-white items-center justify-center rounded-lg bg-[#006d2c] ">
                    <FiPlus/> Add</button>


                <button onClick={handleExport}
                className="flex flex-1 py-2 gap-1.5 font-semibold items-center justify-center rounded-lg bg-[#e5e7eb]"
                ><MdOutlineFileDownload/> Export</button>
            </div>

            {/* Destinations List */}
            <div>

               <div>
                {destinations.length === 0 ? (
                    <div>
                        <p>no destination</p>
                        <p>add destions</p>
                         </div>
                ) : (
                    <div></div>
                )
            }
               </div>

               


            </div>

        </div>
    )
}