import React from "react";
import { useHistory } from "react-router-dom";
import "./Button.css";

const Button = () => {
  const history = useHistory();
  const handleUrl = () => {
    history.push("/colabora");
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
