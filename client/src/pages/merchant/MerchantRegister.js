import React from "react";
import AuthCard from "../../components/AuthCard";
import axios from "axios";
import { signupValidation } from "../../actions/authValidation";
// import { Form } from "react-router-dom";

export default function MerchantAuth() {
  const handleSubmit = async (FormData) => {
    const validation = signupValidation(FormData);

    if (validation.message === "validation passed") {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/auth/register",
          FormData,
          {
            headers: {
              "Content-Type": "multipart/form-data", // for file uploads
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
        throw new Error("server error, plz try again later");
      }
    } else {
      console.log("error", validation);
    }
  };

  return (
    <div>
      <AuthCard onSubmit={handleSubmit} actionType="Register" />
    </div>
  );
}
