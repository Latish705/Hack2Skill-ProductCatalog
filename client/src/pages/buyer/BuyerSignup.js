import React from "react";
import AuthCard from "../../components/AuthCard";
import axios from "axios";
export default function BuyerAuth() {
  const handleSubmit = async (formData) => {
    const response = await axios.post(
      "http://localhost:8080/api/v1/auth/register",
      {
        formData,
      }
    );
    console.log(response);
  };

  return (
    <div>
      <AuthCard onSubmit={handleSubmit} actionType="signup" />
    </div>
  );
}
