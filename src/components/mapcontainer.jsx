import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef } from 'react';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

export const MapContainer = ({destinations}) => {

    // Changed name from MapContainer to mapContainer (lowercase)
    const mapContainer = useRef(null)

    // to store the map object
    const map = useRef(null)

    //to store all markers
    const markersRef = useRef({})

    useEffect(() => {
        //if map already exists for me not to create another one
       if (map.current) return;

       //create Map
       map.current = new mapboxgl.Map({
        container: mapContainer.current,  // Changed to lowercase
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [0, 20],
        zoom: 2
       })

       //when map loads 
       map.current.on('load', () => {
        console.log('Map loaded successfully')
       })

    }, [])

    //update markers when destination changes
    useEffect(() => {
        //if map doesn't exist, wait
        if (!map.current) return;  

        console.log('Updating markers for destinations:', destinations);

        //remove all old markers first
        Object.values(markersRef.current).forEach(marker => marker.remove());  
        markersRef.current = {};

        //add new markers for destination
        destinations.forEach(dest => {

            console.log('Creating marker for:', dest.name, dest.lat, dest.lng);
            //create custom marker element
            const el = document.createElement('div');  
            el.className = 'custom-marker';
            el.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-assets/images/custom_marker.png)';
            el.style.width = '30px';
            el.style.height = '40px';
            el.style.backgroundSize = '100%';  
            el.style.cursor = 'pointer';

            //create marker and add to map
            const marker = new mapboxgl.Marker(el)
                .setLngLat([dest.lng, dest.lat])
                .addTo(map.current);

            //store markers so we can remove it later
            markersRef.current[dest.id] = marker;  // Fixed dest,id to dest.id
        });  // Moved this closing bracket here

    }, [destinations])

    return(
        <div 
            ref={mapContainer}
            style={{ 
                width: '100%', 
                height: '100%' 
            }} 
        />
    )
}