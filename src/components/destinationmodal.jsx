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
                <div className="mb-6 p-4">
                    <label className="block text-sm text-[#374151] font-semibold">
                        Destination Name *
                    </label>

                    <input 
                    type="text" 
                    name='name'
                    placeholder="e.g Tokyo, Japan"
                    value={formData.name}
                    onClick={handleChange}
                    className="w-full border border-[#d1d5db] p-2 rounded-lg box-border"
                    />
                </div>

                {/* Coordinates */}
                <div className="grid grid-cols-[1fr 1fr] gap-2 mb-4">
                    <div>
                    <label className="block text-sm text-[#374151] font-semibold">
                        Coordinates
                    </label>

                    <input 
                    type="text"
                    name="lat"
                    step="0.0001"
                    placeholder="35.6762" 
                    value={formData.lat}
                    onClick={handleChange}
                    className="w-full border border-[#d1d5db] p-2 rounded-lg box-border"
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
                className="w-full border border-[#d1d5db] p-2 rounded-lg box-border"
                />
            </div>

               </div>

                  </div>

         
          
        </div>
    )
}