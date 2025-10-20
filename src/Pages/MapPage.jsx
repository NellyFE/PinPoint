import { useState } from "react";
import { Nav } from "../components/navbar";
import Sidebar from "../components/sidebar";

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


  return (
    <section>

      {/* main app layout container  */}
      <div className="sidebar-layout flex h-screen bg-[#f9fafb]">

        {/* left:sidebar */}
        <div className="sidebar">
            <Sidebar destinations={destinations} setDestinations={setDestinations}/>
        </div>


        {/* right: map area */}
        <div className="flex-1 bg-blue-300">
            <h2>map will go here</h2>
        </div>


      </div>
    </section>
  );
};
