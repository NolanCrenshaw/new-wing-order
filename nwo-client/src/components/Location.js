import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Geocode from "react-geocode";

const Location = () => {
  // State Hooks
  const [location, setLocation] = useState(null);
  const [locationName, setLocationName] = useState("Memphis, TN");
  const [address, setAddress] = useState("Central BBQ");
  const [truckStatus, setTruckStatus] = useState("Today's Service!");

  // Geocode
  Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_API_KEY}`);
  Geocode.setLanguage("en");
  const interpretLocation = async () => {
    await Geocode.fromAddress(`${address}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLocation([lat, lng]);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  useEffect(() => {
    interpretLocation();
  }, []);

  return (
    <div className="location-container">
      <div className="map-container">
        <div id="header-box">
          <span>{truckStatus}</span>
          <h1>{locationName}</h1>
          <h3>{address}</h3>
        </div>
        <div id="map-box">
          {location ? (
            <MapContainer center={location} zoom={15} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={location}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          ) : (
            <span>Loading</span>
          )}
        </div>
      </div>
      <div className="schedule-box"></div>
    </div>
  );
};

export default Location;
