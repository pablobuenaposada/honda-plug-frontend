import React from "react";
import PropTypes from "prop-types";
import "./Home.css";

const Home = ({ content }) => {
  return <div className="home">{content}</div>;
};

Home.propTypes = {
  content: PropTypes.node,
};

export default Home;
