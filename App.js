import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UrlShortenerPage from "./components/UrlShortenerPage";
import StatisticsPage from "./components/StatisticsPage";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Shorten URL</Link> | 
        <Link to="/statistics">Statistics</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UrlShortenerPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
