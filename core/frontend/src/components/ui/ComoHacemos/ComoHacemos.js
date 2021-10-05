import React from "react";
import "./ComoHacemos.css";
import styled from "styled-components";
import ReactPlayer from "react-player";

export const Header = styled.h1.attrs({
  className: "display-4 border-bottom fw-bold",
})`
  color: rgb(62, 35, 7);
`;

const ComoHacemos = () => {
  return (
    <div className="container pt-3 mb-5">
      <div className="container px-4 pt-5" id={"como_hacemos"}>
        <Header>¿Cómo lo Hacemos?</Header>
        <div className="container px-4 pt-4">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/izq-AN8UMA0"
              title="YouTube video"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* <div className="video">
          <ReactPlayer 
            width='1280px' 
            height='720px' 
            controls 
            url="https://www.youtube.com/watch?v=izq-AN8UMA0"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ComoHacemos;
