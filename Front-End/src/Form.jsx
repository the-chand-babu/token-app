import React, { useState } from "react";
import style from "./Form.module.css";
import Joi from "joi";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  const [userDetails, setUserDetails] = useState({
    name: "",
    mob: "",
    email: "",
    DOB: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async () => {
    // console.log("clicked")
    if (Object.keys(userDetails).length == 0) {
      return alert("please fill all the field");
    }

    const result = validation(userDetails);
    console.log(userDetails);
    if (!result) return;
    try {
      let res = await fetch("http://localhost:4200/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      const {message} = await res.json();
      console.log(message)
      
      toast.success(message);
      
    } catch (error) {
      console.log("error", error);
    }
  };

  const validation = (userData) => {
    // alert("validate");

    const schema = Joi.object({
      name: Joi.string().min(3).max(30).required(),
      mob: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .message("Invalid mobile number"),
      DOB: Joi.date().max("now"),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    });

    const { error } = schema.validate(userData);

    if (error) {
      toast.error(error.message);
      return false;
    }

    return true;
  };

  return (
    <>
      <h1>FORM</h1>
      <div className={style.container}>
        <input
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Enter Name"
        />
        <input
          name="DOB"
          onChange={handleChange}
          type="date"
          placeholder="enter date of birth"
        />
        <input
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="Enter email"
        />
        <input
          name="mob"
          onChange={handleChange}
          type="text"
          placeholder="Enter Phone"
        />
        <button onClick={handleSubmit}>submit</button>
        <Toaster />
      </div>
    </>
  );
}

export default Form;
