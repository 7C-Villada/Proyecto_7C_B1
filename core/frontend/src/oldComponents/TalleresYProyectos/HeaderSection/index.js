import React from "react";
import {
  HeaderContainer,
  HeaderBg,
  ImageBg,
} from "./HeaderElements";
import Background from "../../../videos/bg.jpg";

const HeaderSection = () => {
  return (
    <HeaderContainer>
      <HeaderBg>
        <ImageBg src={Background} type="image"></ImageBg>
      </HeaderBg>
    </HeaderContainer>
  );
};

export default HeaderSection;