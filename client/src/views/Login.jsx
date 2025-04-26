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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0D0D0D] to-[#1a1a1a] relative overflow-hidden px-8">
      {/* Background Animation */}
      <div className="absolute inset-0 animate-particles"></div>

      {/* Main Card */}
      <div className="bg-[#121212] bg-opacity-90 backdrop-blur-lg rounded-3xl p-16 md:p-24 xl:p-28 w-full max-w-4xl z-10 shadow-2xl animate-fadeup">
       {/* Title Section */}
       <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4 animate-zoom3d">
            Welcome back to
          </h1>
          <h2 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-lime-400 animate-zoom3d">
            STIQ
          </h2>
        </div>
        {/* Error Message */}
        {errorMessage && (
          <div className="mb-8 text-red-500 text-center text-lg animate-fadeup">
            {errorMessage}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-8">
          <Login
            label="Email Address"
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
            className="w-full py-4 bg-lime-400 text-black text-2xl font-bold rounded-2xl shadow-md hover:shadow-lime-400/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Log In
          </button>
        </form>

        {/* Signup Link */}
        <div className="text-center mt-10 text-lg text-gray-400 animate-fadeup">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-lime-400 hover:underline hover:text-lime-300 transition"
          >
            Sign up
          </a>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-particles {
            background: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px),
                        radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size: 20px 20px;
            animation: backgroundMove 60s linear infinite;
          }

          @keyframes backgroundMove {
            0% { background-position: 0 0, 0 0; }
            100% { background-position: 1000px 500px, 800px 400px; }
          }

          @keyframes zoom3d {
            0% {
              transform: scale(0.8) translateZ(-200px);
              opacity: 0;
            }
            100% {
              transform: scale(1) translateZ(0);
              opacity: 1;
            }
          }
          .animate-zoom3d {
            animation: zoom3d 1.2s ease-out forwards;
          }

          @keyframes fadeup {
            0% {
              transform: translateY(30px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-fadeup {
            animation: fadeup 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default LoginPage;
