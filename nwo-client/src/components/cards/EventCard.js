import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

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
  const [date, setDate] = useState([]);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  // Time & Date Handling
  const convertEventTimeData = () => {
    const startDT = DateTime.fromISO(event.start_time);
    const endDT = DateTime.fromISO(event.end_time);

    setDate([startDT.monthShort, startDT.day, startDT.weekdayShort]);
    setStart(startDT.toLocaleString(DateTime.TIME_SIMPLE));
    setEnd(endDT.toLocaleString(DateTime.TIME_SIMPLE));
  };

  useEffect(() => {
    convertEventTimeData();
  }, [event]);

  return (
    <div className="event-card">
      <div className="event-card_datebox">
        <span>{date[2]}</span>
        <div>
          <span>{date[0]}</span>
          <span>{date[1]}</span>
        </div>
      </div>
      <div className="event-card_textbox">
        <h2>{event.location_name}</h2>
        <h3>{event.address}</h3>
      </div>
      <div className="event-card_timebox">
        <div>
          <span>Starts: </span>
          <span>Ends: </span>
        </div>
        <div>
          <span>{start}</span>
          <span>{end}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
