import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const AuthCard = ({ onSubmit, actionType }) => {
  const [formData, setFormData] = React.useState({
    userName: "",
    email: "",
    contactNumber: "",
    password: "",
    avatar: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = React.useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
      onSubmit(formData);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-50">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white rounded-2xl flex flex-col gap-4"
      >
        <div className=" text-gray-500">
          <label htmlFor="username">Username</label>
          <input
            className="h-9 border border-gray-300 w-full rounded-md mt-1 px-2 text-black"
            type="text"
            id="username"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>

        <div className=" text-gray-500">
          <label htmlFor="email">Email</label>
          <input
            className="h-9 border border-gray-300 w-full rounded-md mt-1 px-2 text-black"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className=" text-gray-500">
          <label htmlFor="contact">Contact</label>
          <input
            className="h-9 border border-gray-300 w-full rounded-md mt-1 px-2 text-black"
            type="tel"
            id="number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            pattern="[0-9]*"
            required
          />
        </div>

        <div className=" text-gray-500">
          <label htmlFor="password">Password</label>
          <input
            className="h-9 border border-gray-300 w-full rounded-md mt-1 px-2 text-black"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className=" text-gray-500">
          <label htmlFor="avatar">Avatar</label>
          <input
            className="h-9 border border-gray-300 w-full rounded-md mt-1 px-2 text-black"
            type="file"
            accept=".jpg,.jpeg,.png"
            id="avatar"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            required
          />
        </div>

        <div className=" text-gray-500">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            className="h-9 border border-gray-300 w-full rounded-md mt-1 px-2 text-black"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>

        <div>
          <Button type="submit">{actionType}</Button>
        </div>
      </form>
    </div>
  );
};

AuthCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  actionType: PropTypes.string,
};

export default AuthCard;
