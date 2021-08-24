import React from "react";
import "./Button.css";

const Button = (props) => {
  const handleUrl = () => {
    window.location.href = props.link;
  };

  return (
    <div>
      <button className="navButton" onClick={handleUrl}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
