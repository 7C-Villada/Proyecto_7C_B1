import React from "react";
import "./Button.css";

const Button = (props) => {
  const handleUrl = () => {
    window.location.href = props.link;
  };

  return (
    <div>
      <button className="navButton" onClick={handleUrl}>
        Colaborá
      </button>
    </div>
  );
};

export default Button;
