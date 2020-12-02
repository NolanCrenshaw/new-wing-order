import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Main = () => {
  // Leaflet

  return (
    <div className="main-container">
      <div className="location-container">
        <div id="header-box">
          <h1>Location</h1>
          <h3>Address</h3>
        </div>
        <div id="map-box">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};
export default Main;
