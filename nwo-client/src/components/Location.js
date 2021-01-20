import React, { useState, useEffect } from "react";
import { BASE_URL } from "../config";
import { DateTime } from "luxon";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Geocode from "react-geocode";

import EventCard from "./cards/EventCard";

const Location = () => {
  // State
  const [events, setEvents] = useState([]);
  const [isKeyLoaded, setIsKeyLoaded] = useState(false);
  const [mapEvent, setMapEvent] = useState(undefined);
  const [mapLocation, setMapLocation] = useState([]);
  const [mapIsPreloaded, setMapIsPreloaded] = useState(false);
  const [truckStatus, setTruckStatus] = useState("");

  // Functions
  const pruneEvents = (events) => {
    const now = DateTime.local();
    const prunedArr = events.filter(
      (e) =>
        // returns events w/ end_times after now +3hrs
        DateTime.fromISO(e.end_time) > now.minus({ hours: 2 })
    );
    return prunedArr;
  };

  /*
    ~~~ EVENT SORT ~~~
    Event sorting is currently handled on backend by
    Event.query.order_by(Event.start_time).all().
    This works because event times are stored in ISO string format.
    A frontend solution will be able to be more explicit.
    This may prove to be needed.
    ~~~ MAYBE TODO ~~~
    const sortEvents = (events) => {
      for (let i = 1; i < events.length; i++) {
        let cur = events[i],
          curTime = DateTime.fromISO(cur.start_time);
        let j = i - 1;
        let comp = events[j],
          compTime = DateTime.fromISO(comp.start_time);
        while (j >= 0 && compTime > curTime) {
          events[j + 1] = events[j];
          j--;
        }
        events[j + 1] = cur;
      }
      console.log("SORT: ", events);
      return events;
    };
  */

  // useEffects
  useEffect(() => {
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
        const pruned = pruneEvents(json.events);
        setEvents(pruned);
      }
    };
    const fetchKey = async () => {
      const res = await fetch(`${BASE_URL}/api/events/key`, {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        // -- TODO -- handling
        console.log("fetchKey res failure", res);
      } else {
        const json = await res.json();
        const key = json.key;
        Geocode.setApiKey(key);
        Geocode.setLanguage("en");
        setIsKeyLoaded(true);
      }
    };
    getEvents();
    fetchKey();
  }, []);

  // Handles MapBox elements from Event List
  useEffect(() => {
    setMapEvent(events[0]);
  }, [events]);

  useEffect(() => {
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
    if (mapEvent !== undefined && isKeyLoaded) {
      interpretLocation();
      const now = DateTime.local();
      const eventStart = DateTime.fromISO(mapEvent.start_time);
      const eventEnd = DateTime.fromISO(mapEvent.end_time);

      if (now < eventStart && now < eventEnd) {
        const dur = now
          .diff(eventStart, ["hours", "minutes"])
          .negate()
          .toFormat("h 'hours' m 'mins'");
        setTruckStatus(`Next Service in: ${dur}`);
      } else if (now >= eventStart && now < eventEnd) {
        setTruckStatus("Serving Now!");
      } else {
        setTruckStatus("Service just ended. Catch us next time!");
      }
    }
  }, [mapEvent, isKeyLoaded]);

  // Render
  return (
    <div className="location-container" id="location">
      <div className="map-container">
        <div id="header-box">
          {mapEvent ? (
            <>
              <span>{truckStatus}</span>
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
