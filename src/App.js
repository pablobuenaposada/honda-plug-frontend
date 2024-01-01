import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./components/Home";
import ReactGA from "react-ga4";
import PropTypes from "prop-types";
import PartContent from "./components/Part";

ReactGA.initialize("G-X5J9MZP0HL");
ReactGA.send("pageview");

const App = () => {
  const [homeContent, setHomeContent] = useState(null);
  const updateHomeContent = (newContent) => {
    setHomeContent(newContent);
  };

  useEffect(() => {
    if (window.location.pathname.startsWith("/part/")) {
      setHomeContent(
        <PartContent
          reference={window.location.pathname.split("/")[2]}
          updateHomeContent={updateHomeContent}
        />
      );
    }
  });

  return (
    <div className="container">
      <Header />
      <Menu updateHomeContent={updateHomeContent} />
      <Home content={homeContent} />
      <Footer />
    </div>
  );
};

App.propTypes = {
  updateHomeContent: PropTypes.func.isRequired,
};

export default App;
