import React, { useEffect, useState } from "react";

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
  const [eventDate, setEventDate] = useState([]);
  const [startTime, setStartTime] = useState([]);
  const [endTime, setEndTime] = useState([]);

  // Time & Date Handling
  const convertEventTimeData = () => {
    const startDateTime = new Date(event.start_time);
    const endDateTime = new Date(event.end_time);
    const start = startDateTime
      .toLocaleString("en-US", dateOptions)
      .split(/[\,,\s]/);
    const end = endDateTime.toLocaleTimeString("en-US").split(/[:,\s]/);
    setEventDate([`${start[0]}`, `${start[2]}`, `${start[3]}`]);
    setStartTime(`${start[7]}:${start[8]}`);
    setEndTime(`${end[0]}:${end[1]} ${end[3]}`);
  };

  useEffect(() => {
    convertEventTimeData();
  }, [event]);

  return (
    <div className="event-card">
      <div className="event-card_datebox">
        <span>{eventDate[0]}</span>
        <div>
          <span>{eventDate[1]}</span>
          <span>{eventDate[2]}</span>
        </div>
      </div>
      <div className="event-card_textbox">
        <h2>{event.location_name}</h2>
        <h3>{event.address}</h3>
      </div>
      <div className="event-card_timebox">
        <span>{startTime}</span>
        <span>{endTime}</span>
      </div>
    </div>
  );
};

export default EventCard;
