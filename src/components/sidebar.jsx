import { BiCurrentLocation } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { FiPlus } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Sidebar({ destinations, setDestinations , onAddClick }) {
  const handleAdd = () => {
    onAddClick();
    console.log("add button clicked");
  };

  const handleExport = () => {

    //convert the destinations to json
    const dataStr = JSON.stringify(destinations, null , 2)

    //create a blob for it
    const dataBlob = new Blob([dataStr], {type:'application/json'})

    //create a temporary URL for the blob
    const url = URL.createObjectURL(dataBlob)

    //create an invisible link 
    const link = document.createElement("a")
    href.link = url
    link.download = "travel-wishlist.json"

    //click the link to download 
    link.click();

    //clean the temporary url
    URL.revokeObjectURL(url)
   
  };

  return (
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
        <h1 className="font-bold text-2xl items-center flex gap-2">
          <SlLocationPin className="text-[#00441b]" /> Wishlist
        </h1>
        <p className="flex text-sm text-gray-400 ml-2">
          {destinations.length} destination
          {destinations.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Button */}
      <div className="p-6 flex gap-[0.5rem]">
        <button
          onClick={handleAdd}
          className="flex flex-1 py-2 gap-1.5 font-semibold text-white items-center justify-center rounded-lg bg-[#006d2c] "
        >
          <FiPlus /> Add
        </button>

        <button
          onClick={handleExport}
          className="flex flex-1 py-2 gap-1.5 font-semibold items-center justify-center rounded-lg bg-[#e5e7eb]"
        >
          <MdOutlineFileDownload /> Export
        </button>
      </div>

      {/* Destinations List */}
      <div className="flex flex-1 overflow-y-auto p-6">
        <div>
          {destinations.length === 0 ? (
            <div className="text-center pt-8 text-[#9ca3af]">
              <p className="font-semibold">No destinations yet</p>
              <p className="text-base">Add one to get started!</p>
            </div>
          ) : (
            destinations.map((dest) => (
              <div
                key={dest.id}
                className="p-2 rounded-lg border-2 border-[#e5e7eb] bg-white mb-4"
              >
                <h3 className="font-semibold text-[#111827]">{dest.name}</h3>
                <p className="text-base text-[#6b7280] mt-0.5">{dest.notes}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

//  // Convert destinations array to JSON string
//     const dataStr = JSON.stringify(destinations, null, 2);

//     // Create a Blob (binary large object) - think of it as a file in memory
//     const dataBlob = new Blob([dataStr], { type: "appliication/json" });

//     // Create a temporary URL for the blob
//     const url = URL.createObjectURL(dataBlob);

//     //Create an invisible link element
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "travel-wishlist.json";

//     // Click the link programmatically to trigger download
//     link.click();

//     // Clean up the temporary URL
//     URL.revokeObjectURL(url);