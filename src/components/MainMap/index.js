import { useState } from "react";
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import * as parkDate from '../../data/locations.json';
import PopupContent from "../PopupContent";

const MainMap = () => {
  const [viewport, setViewport] = useState({
    latitude: -37.8141,
    longitude: 144.9609,
    width: "100vw",
    height: "100vh",
    zoom: 14
  })

  const [selectedPark, setSelectedPark] = useState(null)
  
  return (
    <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          // mapStyle='mapbox://styles/xuequirk/ckqafeto80vfo19laec7zwone'
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        >
         
          {parkDate.features.map(park => (
            <Marker 
              key={park.properties.park_id}  
              latitude={park.geometry.coordinates[1]} 
              longitude={park.geometry.coordinates[0]}
            >
              <button className='marker-btn' onClick={() => setSelectedPark(park)}>
                <img src='/street-view-solid.svg' alt='Icon' width={viewport.zoom * 5} height={viewport.zoom * 5}/>
              </button>
            </Marker>
          ))}
          {selectedPark && (
            <Popup 
              latitude={selectedPark.geometry.coordinates[1]} 
              longitude={selectedPark.geometry.coordinates[0]}
              onClose={() => setSelectedPark(null)}
              closeButton={true}
              closeOnClick={false}
              anchor="bottom"
              >
                
              <PopupContent des={selectedPark.description} address={selectedPark.address}/>
                  
            </Popup>)}
        </ReactMapGL>
      


  )
}

export default MainMap;