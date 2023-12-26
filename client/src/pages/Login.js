import AuthCard from "../components/AuthCard";
import axios from "axios";
export default function Login() {
  const handleLogin = async (formData) => {
    // checking the credentials
    // decided wether merchant or not
    // respective routing

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        formData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <AuthCard onSubmit={handleLogin} actionType="Login" />
    </div>
  );
}
