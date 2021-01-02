import React, { useState, useEffect } from "react";
import { BASE_URL } from "../config";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import EventCard from "./cards/EventCard";

const defaultEvent = {
  id: 0,
  address: "Central BBQ address",
  geo_lat: "",
  geo_lng: "",
  location_name: "Memphis, TN",
  start_time: "",
  end_time: "",
};

const Location = () => {
  // State
  const [events, setEvents] = useState([defaultEvent]);
  const [location, setLocation] = useState([0, 0]);
  const [locationName, setLocationName] = useState("default locationName");
  const [address, setAddress] = useState("default address");
  const [truckStatus, setTruckStatus] = useState("Today's Service!");

  const getEvents = async () => {
    const res = await fetch(`${BASE_URL}/api/events/`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      // -- TODO Handling
      console.log("getEvents res failure");
    } else {
      const json = await res.json();
      setEvents(json.events);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="location-container" id="location">
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
            <span>Loading...</span>
          )}
        </div>
      </div>
      <div className="schedule-box">
        {events.map((event) => (
          <EventCard event={event} />
        ))}
      </div>
    </div>
  );
};

export default Location;
