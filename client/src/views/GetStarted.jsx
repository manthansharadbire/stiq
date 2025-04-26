import { useNavigate } from "react-router-dom";
import { useState } from "react";
import getstarted1 from "./../assets/getstarted1.webp";
import getstarted2 from "./../assets/getstarted2.webp";
import getstarted4 from "./../assets/getstarted4.webp";

const GetStarted = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigation = (path) => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate(path);
    }, 500); 
  };
  

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen px-6 bg-gradient-to-br from-black via-[#0D0D0D] to-[#1a1a1a] overflow-hidden transition-all duration-700 ${
        isAnimating
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      } relative`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full animate-particles"></div>
      </div>

      <div className="flex gap-6 z-10 animate-fadeup">
        <img
          src={getstarted1}
          alt="logo1"
          className="bg-lime-400 rounded-3xl h-[220px] w-[220px] transform transition-all duration-500 group-hover:scale-105 hover:scale-110 animate-fadeup"
        />
        <img
          src={getstarted2}
          alt="logo2"
          className="bg-lime-400 rounded-3xl h-[220px] w-[220px] transform transition-all duration-500 group-hover:scale-105 hover:scale-110 animate-fadeup"
        />
        <img
          src={getstarted4}
          alt="logo4"
          className="bg-lime-400 rounded-3xl h-[220px] w-[220px] transform transition-all duration-500 group-hover:scale-105 hover:scale-110 animate-fadeup"
        />
      </div>

      <div className="text-center mt-[80px] z-10">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-white tracking-tight animate-zoom3d">
          Welcome to <span className="text-lime-400">STIQ</span>
        </h1>
        <p className="text-2xl md:text-2xl mb-10 text-white font-medium max-w-2xl mx-auto animate-fadeup">
          Track your daily activities and boost your{" "}
          <span className="text-lime-400 text-3xl">productivity</span>.
        </p>

        <div className="relative flex flex-col items-center group perspective-1000">
          <button
            onClick={() => handleNavigation("/signup")}
            className="relative w-full max-w-md py-4 mb-3 bg-lime-400 text-black text-2xl font-bold rounded-xl transition-transform duration-500 transform group-hover:rotate-y-12 hover:shadow-[0_0_25px_5px_rgba(163,230,53,0.6)] group-hover:scale-105"
          >
            Get Started
          </button>
        </div>

        <div className="text-white text-md md:text-lg mt-1 animate-fadeup delay-200">
          Already have an account?{" "}
          <span
            onClick={() => handleNavigation("/login")}
            className="underline cursor-pointer hover:text-lime-400 transition duration-300"
          >
            Login
          </span>
        </div>
      </div>

      <div className="absolute bottom-6 text-center text-gray-500 text-xs md:text-sm z-10">
        <p>
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer hover:text-lime-400">
            Terms & Conditions
          </span>
        </p>
        <p className="mt-1">
          &copy; {new Date().getFullYear()} STIQ. All rights reserved.
        </p>
      </div>

      <style>
        {`
          /* Background particles animation */
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

          /* 3D zoom animation */
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

          /* Fade up text */
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

          /* Perspective for 3D */
          .perspective-1000 {
            perspective: 1000px;
          }

          /* Group hover rotate Y */
          .group-hover:rotate-y-12:hover {
            transform: rotateY(12deg);
          }
        `}
      </style>
    </div>
  );
};

export default GetStarted;
