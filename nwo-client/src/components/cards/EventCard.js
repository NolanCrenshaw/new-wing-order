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
  const [eventDate, setEventDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // Time & Date Handling
  const convertEventTimeData = () => {
    if (event.start_time || event.end_time === null) {
      console.log("One or more Event Time is null");
      return;
    }
    console.log("Event Times are not null");
    const start = event.start_time;
    const end = event.end_time;

    setEventDate(start.toLocaleString("en-US", dateOptions).split(/[\,,\s]/));
    setStartTime(start.toLocaleTimeString("en-US").split(/[:,\s]/));
    setEndTime(end.toLocaleTimeString("en-US").split(/[:,\s]/));
  };

  useEffect(() => {
    convertEventTimeData();
  }, []);

  return (
    <div className="event-card" key={event.id}>
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
