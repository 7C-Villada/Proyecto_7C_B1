import React from "react";
import "./ComoHacemos.css";
import ReactPlayer from "react-player";

const ComoHacemos = () => {
  return (
    <div className="comohacemos">
      <div className="cabeza">
        <p>Conócenos</p>
        <h1>¿Cómo lo Hacemos?</h1>
      </div>
      <div className="video">
        <ReactPlayer 
          width='1280px' 
          height='720px' 
          controls 
          url="https://www.youtube.com/watch?v=izq-AN8UMA0"
        />
      </div>
    </div>
  );
};

export default ComoHacemos;
