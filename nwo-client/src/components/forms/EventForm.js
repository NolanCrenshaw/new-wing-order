import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
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

const EventForm = ({ update }) => {
  // Submit State
  const [submitStatus, setSubmitStatus] = useState("");
  const [submitSuccessClass, setSubmitSuccessClass] = useState(
    "submit--failure"
  );

  // Data State
  const [submittedData, setSubmittedData] = useState({});

  // React Hook Form Setup w/ Yup Validation
  const { register, handleSubmit, errors, control } = useForm({
    // mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // Form Submit Control Function
  const onSubmit = (data, e) => {
    e.preventDefault();
    setSubmittedData(data);
    e.target.reset();
  };

  useEffect(() => {
    const createEvent = async (data) => {
      const res = await fetch(`${BASE_URL}/api/events/`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("auth_token")}`,
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        setSubmitStatus(`${json.message}`);
        setSubmitSuccessClass("submit--failure");
      } else {
        const json = await res.json();
        setSubmitStatus(`${json.message}`);
        setSubmitSuccessClass("submit--success");
        update();
      }
    };
    // Conditional function call
    if (submittedData.location !== undefined) {
      createEvent(submittedData);
    }
  }, [submittedData]);

  // Render
  return (
    <div className="event_form-container form-container">
      <h2>Create Event</h2>
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
        <div className="submit-box">
          <button id="create_event-button" type="submit">
            Create Event
          </button>
          <p className={submitSuccessClass}>{submitStatus}</p>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
