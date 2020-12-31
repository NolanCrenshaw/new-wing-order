import React, { useState } from "react";

const dateOptions = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  timezone: "UTC",
  hour12: "false",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};

const EventCard = ({ event }) => {
  // State
  const [eventDate, setEventDate] = useState(new Date());
  const [eventStartTime, setEventStartTime] = useState([]);
  const [eventEndTime, setEventEndTime] = useState([]);

  // Time & Date Handling
  const convertEventTimeData = () => {
    if (event.start_time || event.end_time === null) {
      console.log("One or more Event Time is null");
      return;
    }
    const start = new Date(event.start_time);
    const end = new Date(event.end_time);

    setEventDate(start.toLocaleString("en-US", dateOptions).split(/[\,,\s]/));
    setEventStartTime(start.toLocaleTimeString("en-US").split(/[:,\s]/));
    setEventEndTime(start.toLocaleTimeString("en-US").split(/[:,\s]/));
  };

  return (
    <div className="event-card" key={event.id}>
      <h2>{event.address}</h2>
      <h3>{event.location_name}</h3>
    </div>
  );
};

export default EventCard;
