import React, { useState } from "react";
import { BASE_URL } from "../../config";
import DateTimePicker from "react-datetime-picker";
import Geocode from "react-geocode";

const EventForm = () => {
  // State
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  // Input Handlers
  const updateLocation = (e) => setLocation(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);

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

  const submitEvent = async (e) => {
    e.preventDefault();

    const event_obj = {
      location: location,
      address: address,
      startTime: startTime,
      endTime: endTime,
    };

    const res = await fetch(`${BASE_URL}/api/events/`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event_obj),
    });
    if (!res.ok) {
      // -- TODO -- handling
      console.log("submitEvent res failure");
    } else {
      console.log("submitEvent res success");
    }
  };

  return (
    <div className="event-form">
      <h2>Create New Event</h2>
      <div className="form-inputs">
        <ul>
          <input
            id="event_location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={updateLocation}
          />
          <input
            id="event_address"
            type="text"
            placeholder="Address"
            value={address}
            onChange={updateAddress}
          />
        </ul>
        <div className="event-datebox">
          <div>
            <label>Start Time</label>
            <DateTimePicker onChange={setStartTime} value={startTime} />
          </div>
          <div>
            <label>End Time</label>
            <DateTimePicker onChange={setEndTime} value={endTime} />
          </div>
        </div>
      </div>
      <button id="create_event-button" onClick={submitEvent}>
        Create Event
      </button>
    </div>
  );
};

export default EventForm;
