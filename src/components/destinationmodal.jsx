import { useState } from "react"
import { IoMdCloseCircleOutline } from "react-icons/io";

export const DestinationModal = ({onClose,onSave}) => {


const [formData,setFormData] = useState({
    name:"",
    lat:"",
    lng:"",
    image:"",
    notes:""
})

//handle input changes
const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
}

//handle save changes
const handleSave = () =>{
    if (!formData.name || !formData.lat || !formData.lng){
        alert('please fill in all fields');
        return
    }


//create new destination
const newDestination = {
    id: Date.now(),
    name: formData.name,
    lat: parseFloat(formData.lat),
    lng: parseFloat(formData.lng),
    image: formData.image,
    notes: formData.notes
}

onSave(newDestination)

}

    return(
        <div className="modal">

            <div className="modal-content">
                {/* Modal Header */}
                
                <div className="modal-header">
                    <h2 className="text-2xl font-bold text-[#111827]">Add Destination</h2>
                    <button onClick={onClose} className="bg-none border-none cursor-pointer text-[#6b7280]"><IoMdCloseCircleOutline /></button>
                </div>

                {/* Modal Body */}
                <div className="mb-4 p-4">
                    <label className="block text-sm text-[#374151] font-semibold">
                        Destination Name *
                    </label>

                    <input 
                    type="text" 
                    name='name'
                    placeholder="e.g Tokyo, Japan"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-[#d1d5db] outline-[#e5f5e0] p-2 rounded-lg box-border"
                    />
                </div>

                {/* Coordinates */}
                <div className="flex flex-col lg:flex-row gap-2 mb-4 px-4">
                    <div>
                    <label className="block text-sm text-[#374151] font-semibold">
                        Latitude *
                    </label>

                    <input 
                    type="number"
                    name="lat"
                    step="0.0001"
                    placeholder="35.6762" 
                    value={formData.lat}
                    onChange={handleChange}
                    className="w-full border border-[#d1d5db] outline-[#e5f5e0] p-2 rounded-lg box-border"
/>
                </div>
         

            <div>
                <label className="block text-sm text-[#374151] font-semibold">
                    Longititude *
                </label>

                <input 
                type="number"
                name="lng"
                step="0.0001"
                placeholder="139.6503"
                value={formData.lng}
                onChange={handleChange}
                className="w-full border border-[#d1d5db] outline-[#e5f5e0] p-2 rounded-lg box-border"
                />
            </div>

               </div>

               {/* Notes */}
               <div className="mb-4 p-4">
                <label className="block text-sm text-[#374151] font-semibold">
                    Notes *
                </label>

                <textarea 
                name="notes" 
                placeholder="share your travel goals..."
                id=""
                value={formData.notes}
                onChange={handleChange}
                className="w-full h-[96px] border border-[#d1d5db] p-2 outline-[#e5f5e0] rounded-md text-sm resize-none box-border">

                </textarea>

               </div>

               {/* Image Url */}
               <div className="mb-4 px-4">
                <label>
                    Image URL (Optional)
                </label>
                
                <input 
                type="text"
                name="image"
                placeholder="paste image url here"
                value={formData.image}
                onChange={handleChange} 
                className="w-full border border-[#d1d5db] outline-[#e5f5e0] p-2 rounded-lg box-border"
                />
                
               </div>

               {/* Tips */}
               <div className="mb-4 px-4">
               <div className="p-2 bg-[#eff6ff] border border-[#bfdbfe] rounded-xl text-sm text-[#1e40af]">
                <p className="font-semibold mb-1">💡 Need coordinates?</p>
                <p>Search your destination on Google Maps, click on it, and the coordinates appear in the URL!</p>
               </div>
               </div>

               {/* Modal Footer */}
               <div className="modal-footer">
                <button onClick={onClose}
                className="flex flex-1 bg-[#e5e7eb] text-[#1f2937] text-center items-center justify-center p-2 rounded-lg font-semibold border border-transparent cursor-pointer hover:border-red-400">
                    Cancel
                    </button>
                <button onClick={handleSave}
                className="flex flex-1 bg-[#41ab5d] text-center items-center justify-center text-white p-2 rounded-lg font-semibold border-none cursor-pointer">Add</button>

               </div>

                  </div>

         
          
        </div>
    )
}