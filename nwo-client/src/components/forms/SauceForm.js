import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL } from "../../config";

const content = {
  inputs: [
    {
      label: "Name",
      name: "name",
      type: "text",
    },
    {
      label: "Heat",
      name: "heat",
      type: "number",
    },
  ],
  select: [
    {
      label: "Select Type",
      name: "type",
    },
  ],
};

const schema = yup.object().shape({
  name: yup.string().required("A name is required").min(3).max(30),
  heat: yup.number().required().min(0).max(5),
  type: yup.string().required("A type is required"),
});

const options = [
  { value: "rubs", label: "Rub" },
  { value: "sauces", label: "Sauce" },
];

const SauceForm = () => {
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
    const createSauce = async (data) => {
      const res = await fetch(`${BASE_URL}/api/${data.type}/`, {
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
      }
    };
    // Conditional function call
    if (submittedData.name !== undefined) {
      createSauce(submittedData);
    }
  }, [submittedData]);
  return (
    <div className="sauceform-container form-container">
      <h2>Create Sauce or Rub</h2>
      {/* <div className="pseudo-form">
        <label>Select Sauce or Rub</label>
        <Select options={options} onChange={typeHandler} />
      </div> */}
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
        {content.select.map((input, key) => {
          return (
            <div className="form_element" key={key}>
              <div className="form_label-box">
                <label>{input.label}</label>
                <p>{errors[input.name]?.message}</p>
              </div>
              <Controller
                control={control}
                name={input.name}
                render={(props) => (
                  <Select
                    options={options}
                    onChange={(e) => props.onChange(e.value)}
                  />
                )}
              />
            </div>
          );
        })}
        <div className="submit-box">
          <button id="create_event-button" type="submit">
            Create Sauce
          </button>
          <p className={submitSuccessClass}>{submitStatus}</p>
        </div>
      </form>
    </div>
  );
};

export default SauceForm;
