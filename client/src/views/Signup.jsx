import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SignupPage from "./../components/SignupPage";

const Signup = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  //Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002/signup", {
        user,
        email,
        password,
        city,
        gender,
        age,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="max-w space-y-8 mx-auto bg-green-500 min-h-screen">
      <h2 className="text-center text-3xl font-extrabold text-gray-900">
        Sign Up
      </h2>
      {errorMessage && (
        <div className="text-red-500 text-center">{errorMessage}</div>
      )}
      <form onSubmit={handleSignup} className="mt-8 space-y-6">
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

        <SignupPage
          label="City"
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <SignupPage
          label="Gender"
          type="text"
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />

        <SignupPage
          label="Age"
          type="number"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
      <div className="text-center">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600">
          Login here
        </a>
      </div>
    </div>
  );
};

export default Signup;
