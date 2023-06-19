import React from "react";
import "./Home.css";
import Latest from "./Latest";

const Home = () => {
  return (
    <div className="home">
      The aim of Honda Plug is to track Honda original parts stocks around the
      world.
      <br></br>
      If you think there is a part is missing in our records or there&apos;s an
      interesting shop that is missing let us know through Contact section.
      <Latest />
    </div>
  );
};

export default Home;
