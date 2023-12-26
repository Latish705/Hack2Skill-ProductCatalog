import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const AuthCard = ({ onSubmit, actionType }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    avatar: null,
  });

  const [passwordError, setPasswordError] = React.useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.files[0], // Assuming single file upload
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
        className="p-8 bg-white rounded-2xl flex flex-col gap-4 shadow-lg"
      >
        <div className=" text-gray-500">
          <label htmlFor="username">Username</label>
          <input
            className="h-9 border border-gray-300 w-full rounded-md mt-1 px-2 text-black"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        {actionType !== "Login" && (
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
        )}
        {actionType !== "Login" && (
          <div className=" text-gray-500">
            <label htmlFor="contact">Contact</label>
            <input
              className="h-9 border border-gray-300 w-full rounded-md mt-1 px-2 text-black"
              type="tel"
              id="number"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              pattern="[0-9]*"
              required
            />
          </div>
        )}
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
        {actionType !== "Login" && (
          <>
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
            <div className="text-gray-500">
              <label htmlFor="avatar">Avatar</label>
              <input
                className="h-9 border border-gray-300 w-full rounded-md mt-1 px-2 text-black"
                type="file"
                id="avatar"
                name="avatar"
                onChange={handleFileChange}
                required
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
          </>
        )}{" "}
        {/* if actiontype login then element is hidden */}
        <div>
          <Button type="submit">{actionType}</Button>
        </div>
        <div className="text-sm">
          {actionType !== "Login" && (
            <p>
              Already have an accout?
              <button
                className="text-blue-500 underline ml-1"
                onClick={() => {
                  navigate("/Login");
                }}
              >
                Login
              </button>
            </p>
          )}
          {actionType === "Login" && (
            <p className="text-sm">
              New Here?
              <button
                className="text-blue-500 underline ml-1"
                onClick={() => {
                  navigate("/");
                }}
              >
                Sign up
              </button>
            </p>
          )}
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
