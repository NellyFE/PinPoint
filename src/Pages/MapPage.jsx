import { useState } from "react";
import { Nav } from "../components/navbar";
import Sidebar from "../components/sidebar";
import { DestinationModal } from "../components/destinationmodal";




export const Mappage = () => {
const [destinations, setDestinations] = useState([

       {
      id: 1,
      name: 'Tokyo, Japan',
      lat: 35.6762,
      lng: 139.6503,
      notes: 'Want to experience the culture and food scene',
      image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9c1?w=300&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Barcelona, Spain',
      lat: 41.3851,
      lng: 2.1734,
      notes: 'Gaudí architecture and Mediterranean beaches',
      image: 'https://images.unsplash.com/photo-1583444694107-31cd97dfd241?w=300&h=300&fit=crop',
    },
])

const [showModal, setShowModal] = useState (false);

//function to open modal 
const openAddModal = () => {
  setShowModal(true);
};

//function to close modal 
const closeModal = () => {
  setShowModal(false);
}

//function to add destinations
const addDestinations = (newDestination) => {
setDestinations([...destinations,newDestination]);
closeModal();
}



  return (
    <section>

      {/* main app layout container  */}
      <div className="sidebar-layout flex h-screen bg-[#f9fafb]">

        {/* left:sidebar */}
        <div className="sidebar">
            <Sidebar 
            destinations={destinations} 
            setDestinations={setDestinations}
            onAddClick={openAddModal}
            />
        </div>


        {/* right: map area */}
        <div className="flex-1">
              <img
        src="/images/mapdecoy.png"
        alt="Travel"
        className="h-full w-full object-cover"
      />

        </div>

      </div>

      {/*modal only shows when clicked*/}

      {showModal && 
      <DestinationModal
      onClose={closeModal}
      onSave={addDestinations}
      />
      }
    </section>
  );
};
