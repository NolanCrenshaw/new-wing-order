import React, { useState, useEffect } from "react";
import { BASE_URL } from "../config";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Geocode from "react-geocode";

import EventCard from "./cards/EventCard";

const Location = () => {
  // State
  const [events, setEvents] = useState([]);
  const [mapEvent, setMapEvent] = useState(undefined);
  const [mapLocation, setMapLocation] = useState([]);
  const [mapIsPreloaded, setMapIsPreloaded] = useState(false);

  // Geocode
  Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_API_KEY}`);
  Geocode.setLanguage("en");
  const interpretLocation = async () => {
    await Geocode.fromAddress(mapEvent.address).then(
      (res) => {
        const { lat, lng } = res.results[0].geometry.location;
        setMapLocation([lat, lng]);
        setMapIsPreloaded(true);
      },
      (err) => {
        console.error(err);
      }
    );
  };

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

  const assignMapEvent = () => {
    setMapEvent(events[0]);
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    assignMapEvent();
  }, [events]);

  useEffect(() => {
    mapEvent !== undefined
      ? interpretLocation()
      : console.log("mapEvent is still loading");
  }, [mapEvent]);

  return (
    <div className="location-container">
      <div id="location" />
      <div className="map-container">
        <div id="header-box">
          {mapEvent ? (
            <>
              {/* <span>{truckStatus}</span> */}
              <h1>{mapEvent.location_name}</h1>
              <h3>{mapEvent.address}</h3>
            </>
          ) : (
            <span>Map Event not loaded...</span>
          )}
        </div>
        <div id="map-box">
          {mapIsPreloaded ? (
            <MapContainer
              center={mapLocation}
              zoom={15}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={mapLocation}>
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
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default Location;
