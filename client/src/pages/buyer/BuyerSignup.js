import React from "react";
import AuthCard from "../../components/AuthCard";
import axios from "axios";
import { signupValidation } from "../../actions/authValidation";

export default function BuyerAuth() {
  const handleSubmit = async (formData) => {
    const validation = signupValidation(formData);
    if (validation.message === "validation passed") {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/auth/register",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
        throw new Error("server side error, plz try again later");
      }
    } else {
      console.log("validation failed", validation);
      alert("Incorrect input types");
      return;
    }
  };

  return (
    <div>
      <AuthCard onSubmit={handleSubmit} actionType="signup" />
    </div>
  );
}
