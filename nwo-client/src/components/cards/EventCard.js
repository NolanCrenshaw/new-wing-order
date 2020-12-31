import React, { useState } from "react";

const EventCard = ({ event }) => {
  // State
  const [eventDate, setEventDate] = useState(new Date());
  const [eventStartTime, setEventStartTime] = useState([]);
  const [eventEndTime, setEventEndTime] = useState([]);
  // Time & Date Handling
  // const eventDate =

  return (
    <div className="event-card" key={event.id}>
      <h2>{event.address}</h2>
      <h3>{event.location_name}</h3>
    </div>
  );
};

export default EventCard;
