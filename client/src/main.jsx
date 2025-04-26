import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./views/Signup";
import GetStarted from "./views/GetStarted";
import Login from "./views/Login";
import Habit from "./views/Habit";
import "./index.css"; 


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<GetStarted />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/habit" element={<Habit />} />
    
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

