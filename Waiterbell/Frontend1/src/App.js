import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfirmationPage from "./pages/ConfirmationPage";
import RequestPage from "./pages/RequestPage"; // Sørg for at denne filen finnes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RequestPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
