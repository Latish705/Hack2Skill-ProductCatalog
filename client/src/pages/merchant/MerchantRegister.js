import React from "react";
import AuthCard from "../../components/AuthCard";
import axios from "axios";

export default function MerchantAuth() {
  const handleSubmit = async (formData) => {
    console.log("submit function here", formData);
    const response = await axios.post(
      "http://localhost:8080/api/v1/auth/register",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Important for file uploads
        },
      }
    );
    console.log(response);
  };

  return (
    <div>
      <AuthCard onSubmit={handleSubmit} actionType="Register" />
    </div>
  );
}
