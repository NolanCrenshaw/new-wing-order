import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DateTime } from "luxon";
import DatePicker from "react-modern-calendar-datepicker";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import TimeKeeper from "react-timekeeper";
import { BASE_URL } from "../../config";

const content = {
  inputs: [
    {
      label: "Location Name",
      name: "location",
      type: "text",
    },
    {
      label: "Street Address",
      name: "address",
      type: "text",
    },
  ],
};

const schema = yup.object().shape({
  location: yup.string().required().min(4).max(30),
  address: yup.string().required().min(4).max(30),
});

const EventForm = () => {
  const [submitError, setSubmitError] = useState("");

  // Data State
  const [submittedData, setSubmittedData] = useState({});

  // React Hook Form Setup w/ Yup Validation
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // Form Submit Control Function
  const onSubmit = (data, e) => {
    e.preventDefault();
    setSubmittedData(data);
    e.target.reset();
  };

  // State
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [dateChoice, setDateChoice] = useState(null);
  const [startTime, setStartTime] = useState(DateTime.local());
  const [endTime, setEndTime] = useState(DateTime.local());

  // Input Handlers
  const updateLocation = (e) => setLocation(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);

  // Restore Default States
  const stateRestore = () => {
    setLocation("");
    setAddress("");
    setDateChoice(null);
    setStartTime(DateTime.local());
    setEndTime(DateTime.local());
  };

  const submitEvent = async (e) => {
    e.preventDefault();

    const token = window.localStorage.getItem("auth_token");
    const splitStartTime = startTime.split(":");
    const splitEndTime = endTime.split(":");

    const event_obj = {
      location: location,
      address: address,
      startTime: DateTime.fromObject({
        year: dateChoice.year,
        month: dateChoice.month,
        day: dateChoice.day,
        hour: splitStartTime[0],
        minute: splitStartTime[1],
      }).toISO(),
      endTime: DateTime.fromObject({
        year: dateChoice.year,
        month: dateChoice.month,
        day: dateChoice.day,
        hour: splitEndTime[0],
        minute: splitEndTime[1],
      }).toISO(),
    };

    const res = await fetch(`${BASE_URL}/api/events/`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
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
      {/* <h2>Create New Event</h2> */}
      <form className="event_form" onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input, key) => {
          return (
            <div className="form_element" key={key}>
              <div>
                <label>{input.label}</label>
                <p>{errors[input.name]?.message}</p>
              </div>
              <input
                name={input.name}
                type={input.type}
                ref={register}
                placeholder={input.label}
              />
            </div>
          );
        })}
        <label>Select Date</label>
        <DatePicker
          value={dateChoice}
          onChange={setDateChoice}
          inputPlaceholder="Select a day"
          shouldHighlightWeekends
        />
      </form>
      {/* <div className="form-inputs">
        <div className="event-datebox">
          <label>Select Date</label>
          <DatePicker
            value={dateChoice}
            onChange={setDateChoice}
            inputPlaceholder="Select a day"
            shouldHighlightWeekends
          />
        </div>
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
      </div> */}
      <button id="create_event-button" onClick={submitEvent}>
        Create Event
      </button>
    </div>
  );
};

export default EventForm;
