import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Geocode from "react-geocode";

const Main = () => {
  // State Hooks
  const [location, setLocation] = useState("Memphis, TN");
  const [address, setAddress] = useState("default");
  const [latitude, setLatitude] = useState(35.1295);
  const [longitude, setLongitude] = useState(-89.8721);

  // Geocode
  Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_API_KEY}`);
  Geocode.setLanguage("en");

  const InterpretLocation = async () => {
    await Geocode.fromAddress("Memphis, TN").then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        setLatitude(lat);
        setLongitude(lng);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  useEffect(() => {
    InterpretLocation();
  }, []);

  return (
    <div className="main-container">
      <div className="location-container">
        <div id="header-box">
          <h2>Where is the Truck Now?</h2>
          <h1>{location}</h1>
          <h3>{address}</h3>
        </div>
        <div id="map-box">
          <MapContainer
            center={[`${latitude}`, `${longitude}`]}
            zoom={10}
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
