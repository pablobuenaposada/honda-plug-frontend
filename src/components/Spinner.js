import React from "react";
import "./Spinner.css";
import { ColorRing } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div key="loading" className="loading">
      <ColorRing
        colors={["#0d917e", "#0d917e", "#0d917e", "#0d917e", "#0d917e"]}
      />
    </div>
  );
};

export default Spinner;
