import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DateTime } from "luxon";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

// import DatePicker from "react-modern-calendar-datepicker";
// import "react-modern-calendar-datepicker/lib/DatePicker.css";
// import TimeKeeper from "react-timekeeper";
import { BASE_URL } from "../../config";

const content = {
  inputs: [
    {
      label: "Location Name",
      name: "location",
      type: "text",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
    },
  ],
  dateSelect: [
    {
      label: "Event Date",
      name: "date",
    },
  ],
  timeSelect: [
    {
      label: "Start Time",
      name: "startTime",
    },
    {
      label: "End Time",
      name: "endTime",
    },
  ],
};

const schema = yup.object().shape({
  location: yup.string().required("A location is required").min(4).max(30),
  address: yup.string().required("An address is required").min(4).max(30),
  date: yup.date().required("An event date is required"),
  startTime: yup.string().required("A starting time is required"),
  endTime: yup.string().required("An ending time is required"),
});
const EventForm = () => {
  const [submitError, setSubmitError] = useState("");
  const [dateError, setDateError] = useState("");

  // Data State
  const [submittedData, setSubmittedData] = useState({});
  // const [dateVal, setDateVal] = useState(new Date());

  // React Hook Form Setup w/ Yup Validation
  const { register, handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // Form Submit Control Function
  const onSubmit = (data, e) => {
    e.preventDefault();
    setSubmittedData(data);
    e.target.reset();
  };

  //   const token = window.localStorage.getItem("auth_token");
  //   const splitStartTime = startTime.split(":");
  //   const splitEndTime = endTime.split(":");

  //   const event_obj = {
  //     location: location,
  //     address: address,
  //     startTime: DateTime.fromObject({
  //       year: dateChoice.year,
  //       month: dateChoice.month,
  //       day: dateChoice.day,
  //       hour: splitStartTime[0],
  //       minute: splitStartTime[1],
  //     }).toISO(),
  //     endTime: DateTime.fromObject({
  //       year: dateChoice.year,
  //       month: dateChoice.month,
  //       day: dateChoice.day,
  //       hour: splitEndTime[0],
  //       minute: splitEndTime[1],
  //     }).toISO(),
  //   };

  //   const res = await fetch(`${BASE_URL}/api/events/`, {
  //     method: "POST",
  //     mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(event_obj),
  //   });
  //   if (!res.ok) {
  //     // -- TODO -- handling
  //     console.log("submitEvent res failure", res);
  //   } else {
  //     stateRestore();
  //   }
  // };

  // Render
  return (
    <div className="event_form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input, key) => {
          return (
            <div className="form_element" key={key}>
              <div className="form_label-box">
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
        {content.dateSelect.map((input, key) => {
          return (
            <div className="form_element " key={key}>
              <div className="form_label-box">
                <label>{input.label}</label>
                <p>{errors[input.name]?.message}</p>
              </div>
              <Controller
                control={control}
                name={input.name}
                render={(props) => (
                  <DatePicker
                    placeholderText="Select Event Date"
                    selected={props.value}
                    onChange={(e) => props.onChange(e)}
                    onSelect={(e) => props.onChange(e)}
                  />
                )}
              />
            </div>
          );
        })}
        {content.timeSelect.map((input, key) => {
          return (
            <div className="form_element time_select" key={key}>
              <div className="form_label-box">
                <label>{input.label}</label>
                <p>{errors[input.name]?.message}</p>
              </div>
              <Controller
                control={control}
                name={input.name}
                render={(props) => (
                  <TimePicker
                    value={props.value}
                    onChange={(e) => props.onChange(e)}
                    disableClock={true}
                  />
                )}
              />
            </div>
          );
        })}
        <button id="create_event-button" type="submit">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
