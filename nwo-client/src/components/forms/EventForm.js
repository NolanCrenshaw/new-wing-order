import React, { useState } from "react";
import { BASE_URL } from "../../config";
import { DateTime } from "luxon";
import TimeKeeper from "react-timekeeper";
// import DayPicker from "react-day-picker";
// import Geocode from "react-geocode";

// import { FloatToString } from "../utils";

const EventForm = () => {
  // State
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [dateChoice, setDateChoice] = useState(new Date());
  const [startTime, setStartTime] = useState(DateTime.local());
  const [endTime, setEndTime] = useState(DateTime.local());
  // const [geoLat, setGeoLat] = useState("");
  // const [geoLng, setGeoLng] = useState("");

  // Input Handlers
  const updateLocation = (e) => setLocation(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);

  // Restore Default States
  const stateRestore = () => {
    setLocation("");
    setAddress("");
    setStartTime(DateTime.local());
    setEndTime(DateTime.local());
    // setGeoLat("");
    // setGeoLng("");
  };

  // // Geocode
  // Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_API_KEY}`);
  // Geocode.setLanguage("en");
  // const interpretLocation = async () => {
  //   await Geocode.fromAddress(`${address}`).then(
  //     (res) => {
  //       const { lat, lng } = res.results[0].geometry.location;
  //       const latString = FloatToString(lat);
  //       const lngString = FloatToString(lng);
  //       setGeoLat(latString);
  //       setGeoLng(lngString);
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  // };

  const submitEvent = async (e) => {
    e.preventDefault();

    const d = DateTime.fromISO(dateChoice.toISOString());
    const splitStartTime = startTime.split(":");
    const splitEndTime = endTime.split(":");
    // const start = DateTime.local();
    // const end = DateTime.local();

    const event_obj = {
      location: location,
      address: address,
      startTime: DateTime.fromObject({
        year: d.year,
        month: d.month,
        day: d.day,
        hour: splitStartTime[0],
        minute: splitStartTime[1],
      }).toISO(),
      endTime: DateTime.fromObject({
        year: d.year,
        month: d.month,
        day: d.day,
        hour: splitEndTime[0],
        minute: splitEndTime[1],
      }).toISO(),
      // geoLat: geoLat,
      // geoLng: geoLng,
    };

    const res = await fetch(`${BASE_URL}/api/events/`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event_obj),
    });
    if (!res.ok) {
      // -- TODO -- handling
      console.log("submitEvent res failure", res);
    } else {
      stateRestore();
    }
  };

  // Render
  return (
    <div className="event_form-container">
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
          <label>Select Date</label>
          {/* <DayPicker onDayClick={setDateChoice} selectedDays={dateChoice} />
        </div> */}
        <div className="event-timebox">
          <div className="event-timebox_timepick-container">
            <label>Select Start Time</label>
            <TimeKeeper
              time={startTime}
              onChange={(t) => setStartTime(t.formatted24)}
              coarseMinutes={15}
              forceCoarseMinutes
            />
          </div>
          <div className="event-timebox_timepick-container">
            <label>Select End Time</label>
            <TimeKeeper
              time={endTime}
              onChange={(t) => setEndTime(t.formatted24)}
              coarseMinutes={15}
              forceCoarseMinutes
            />
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
