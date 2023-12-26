import AuthCard from "../components/AuthCard";
import axios from "axios";
import { loginValidation } from "../actions/authValidation";

export default function Login() {
  const handleLogin = async (formData) => {
    const validation = loginValidation(formData);

    if (validation === "validation passed") {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/auth/login",
          formData
        );
        console.log(response);
        const { accessToken, refreshToken, user, message } = response.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        alert(message);
        console.log(message);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("error: ", validation);
      alert("Incorrect input, plz recheck");
      return;
    }
  };

  return (
    <div>
      <AuthCard onSubmit={handleLogin} actionType="Login" />
    </div>
  );
}
