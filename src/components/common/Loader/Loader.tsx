import React from "react";
import "./Loader.scss";

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
