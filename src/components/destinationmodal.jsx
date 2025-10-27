import { useState } from "react"

export const DestinationModal = ({onClose,onSave}) => {


const [formData,setFormData] = useState({
    name:"",
    lat:"",
    lng:"",
    image:"",
    notes:""
})

const handleChange = () => {
    const {name,value} = e.target;
    setFormData({...formData,[name]:value})
}

    return(
        <div>

        </div>
    )
}