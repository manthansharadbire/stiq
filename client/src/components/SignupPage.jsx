import React from "react";

const SignupPage = ({ label, type, name, value, onChange, options = [] }) => {
  return (
    <div className="flex flex-col mb-6">
      <label htmlFor={name} className="text-sm font-semibold text-white mb-2">
        {label}
      </label>

      {type === "radio" ? (
        <div className="flex gap-6">
          {options.map((option) => (
            <label
              key={option}
              className="flex items-center space-x-2 text-white cursor-pointer"
            >
         
              <span className="text-sm">{option}</span>
            </label>
          ))}
        </div>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="px-4 py-3 bg-[#1f1f1f] text-white border border-lime-500 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lime-400/30"
          required
        />
      )}
    </div>
  );
};

export default SignupPage;
