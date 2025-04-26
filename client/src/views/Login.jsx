import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="max-w-md w-full space-y-8 mx-auto mt-10">
      <h2 className="text-center text-3xl font-extrabold text-gray-900">
        Log In
      </h2>
      {errorMessage && (
        <div className="text-red-500 text-center">{errorMessage}</div>
      )}
      <form onSubmit={handleLogin} className="mt-8 space-y-6">
        <Login
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Login
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Log In
        </button>
      </form>
      <div className="text-center mt-4">
        Don't have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
