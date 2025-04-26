import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignupPage from "../components/SignupPage";

const Signup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002/signup", {
        user,
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#0D0D0D] to-[#1a1a1a] overflow-hidden px-4">
      <div className="absolute inset-0 z-0 animate-particles"></div>

      <div className="z-10 w-[900px]  p-8 md:p-12 bg-[#111111cc] backdrop-blur-lg rounded-3xl shadow-2xl animate-fadeup border border-[#2d2d2d] flex flex-col justify-center">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide animate-zoom3d">
            Create your <span className="text-lime-400 ">STIQ</span> Account
          </h2>
        </div>

        {errorMessage && (
          <div className="text-red-500 text-center font-semibold mb-4 text-lg">
            {errorMessage}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSignup}
          className="flex flex-col gap-6 w-full"
        >
          <SignupPage
            label="Name"
            type="text"
            name="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <SignupPage
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <SignupPage
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-lime-400 text-black text-xl font-bold rounded-xl transition duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_3px_rgba(163,230,53,0.6)]"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <div className="text-center text-white text-md mt-6">
          Already have an account?{" "}
          <a href="/login" className="underline hover:text-lime-400">
            Log in
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
          @keyframes fadeup {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-fadeup {
            animation: fadeup 1s ease-out forwards;
          }
          @keyframes zoom3d {
            0% { transform: scale(0.8) translateZ(-200px); opacity: 0; }
            100% { transform: scale(1) translateZ(0); opacity: 1; }
          }
          .animate-zoom3d {
            animation: zoom3d 1.2s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Signup;
