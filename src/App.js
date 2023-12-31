import Header from "./components/Header";
import Menu from "./components/Menu";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Home";
import ReactGA from "react-ga4";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PartContent from "./components/Part";

ReactGA.initialize("G-X5J9MZP0HL");
ReactGA.send("pageview");

const App = () => {
  const [homeContent, setHomeContent] = useState(null);
  const updateHomeContent = (newContent) => {
    setHomeContent(newContent);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Menu updateHomeContent={updateHomeContent} />
        <Routes>
          <Route index element={<Home content={homeContent} />} />
          <Route
            path="/part/:partId"
            element={<Home content={<PartContent />} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

App.propTypes = {
  updateHomeContent: PropTypes.func.isRequired,
};

export default App;
