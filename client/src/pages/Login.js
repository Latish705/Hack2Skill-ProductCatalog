import axios from "axios";
import React, { useState } from "react";
import { loginValidation } from "../actions/authValidation";
import Button from "../components/Button";
import Cookie from "js-cookie";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (formData) => {
    try {
      const validation = loginValidation(formData);

      if (validation === "validation passed") {
        const response = await axios.post(
          "http://localhost:8080/api/v1/auth/login",
          formData
        );

        const { user, message } = response.data;

        const accessToken = Cookie.get("accessToken");
        const refreshToken = Cookie.get("refreshToken");

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        alert(message);
        console.log(message);
      } else {
        console.log("error: ", validation);
        alert("Incorrect credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 overflow-visible">
      <form
        className="p-8 flex flex-col gap-4 bg-white rounded-2xl shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(user);
        }}
      >
        <div>
          <label htmlFor="username">Username</label>
          <input
            className="h-9 border border-gray-300 w-full rounded-md mt-1 px-2 text-black"
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={user.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            className="h-9 border border-gray-300 w-full rounded-md mt-1 px-2 text-black"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
