import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

// const dateOptions = {
//   weekday: "short",
//   year: "numeric",
//   month: "short",
//   day: "numeric",
//   timezone: "UTC",
//   hour12: "false",
//   hour: "2-digit",
//   minute: "2-digit",
//   timeZoneName: "short",
// };

const EventCard = ({ event }) => {
  // State
  const [eventDate, setEventDate] = useState([]);
  const [startTime, setStartTime] = useState([]);
  const [endTime, setEndTime] = useState([]);

  // Time & Date Handling
  const convertEventTimeData = () => {
    const startDateTime = DateTime.local(event.start_time);
    const endDateTime = DateTime.local(event.end_time);

    console.log("Start Time: ", startDateTime);
    console.log("End Time: ", endDateTime);

    // const date = startDateTime
    //   .toLocaleString("en-US", dateOptions)
    //   .split(/[\,,\s]/);
    // const start = startDateTime.toLocaleTimeString("en-US").split(/[:,\s]/);
    // const end = endDateTime.toLocaleTimeString("en-US").split(/[:,\s]/);
    // setEventDate([`${date[0]}`, `${date[2]}`, `${date[3]}`]);
    // setStartTime(`${start[0]}:${start[1]} ${start[3]}`);
    // setEndTime(`${end[0]}:${end[1]} ${end[3]}`);
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
        <div>
          <span>Starts: </span>
          <span>Ends: </span>
        </div>
        <div>
          <span>{startTime}</span>
          <span>{endTime}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
