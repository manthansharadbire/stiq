import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
    </StrictMode>
);
