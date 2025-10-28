import { useState } from "react"

export const DestinationModal = ({onClose,onSave}) => {


const [formData,setFormData] = useState({
    name:"",
    lat:"",
    lng:"",
    image:"",
    notes:""
})

//handle input changes
const handleChange = () => {
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
                
                <div className="modal-header">
                    d
                </div>
            </div>
          
        </div>
    )
}