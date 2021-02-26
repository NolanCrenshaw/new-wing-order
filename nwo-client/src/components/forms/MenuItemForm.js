import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { BASE_URL } from "../../config";

const content = {};

const schema = yup.object().shape({});

const MenuItemForm = () => {
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

  return (
    <div className="menuitem_form-container form-container">
      <h2>Create Menu Item</h2>
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </div>
  );
};

export default MenuItemForm;
