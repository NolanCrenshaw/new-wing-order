import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL } from "../../config";

const content = {
  inputs: [
    {
      label: "Item Name",
      name: "name",
      type: "text",
    },
    {
      label: "Description",
      name: "description",
      type: "textarea",
    },
    {
      label: "Price",
      name: "price",
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
  description: yup.string().required("A description is required").min(5),
  price: yup.number().required().min(1),
  type: yup.string().required("A type is required"),
});

const options = [
  { value: "kitchen", label: "Kitchen Item" },
  { value: "side", label: "Side Item" },
];

const MenuItemForm = ({ update }) => {
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
    update();
  };

  useEffect(() => {
    const createMenuItem = async (data) => {
      const res = await fetch(`${BASE_URL}/api/menu_items/`, {
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
    if (submittedData.name !== undefined) {
      createMenuItem(submittedData);
    }
  }, [submittedData]);

  return (
    <div className="menuitem_form-container form-container">
      <h2>Create Menu Item</h2>
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
            Create Item
          </button>
          <p className={submitSuccessClass}>{submitStatus}</p>
        </div>
      </form>
    </div>
  );
};

export default MenuItemForm;
