import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MagicalResume from "./MagicalResume";
import HobbiesPage from "./HobbiesPage";
import PublicationsPage from "./PublicationsPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MagicalResume />} />
        <Route path="/hobbies" element={<HobbiesPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
