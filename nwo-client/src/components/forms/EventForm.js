import React, { useState } from "react";

const EventForm = () => {
  // State
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  // Input Handlers
  const updateLocation = (e) => setLocation(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);

  return (
    <div className="event-form">
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
    </div>
  );
};

export default EventForm;
