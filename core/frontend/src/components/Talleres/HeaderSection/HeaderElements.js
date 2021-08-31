import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 545px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 780px) {
    justify-content: center;
  }
`;

export const HeaderBg = styled.div`
  /*background-color: blue;*/
  position: absolute;
  top: 0%;
  width: 100%;
  height: 85%;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

{/* extend image and make title box transparent

export const HeaderBg = styled.div`
  background-color: blue;
  position: absolute;
  top: 0%;
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.div`
background-color: #618817;
border: 2px solid #3A540A;
opacity: 0.7;
position: absolute;
bottom: 0%;
width: 100%;
height: 20%;

`;
*/}

export const InfoContainer = styled.div`
background-color: #49a651;
position: absolute;
bottom: 0%;
width: 100%;
height: 15%;

`;

export const TitleBox = styled.div`
/*background-color: orange;*/

width: 85%;
height: 100%;
padding-left: 1%;

display: inline-block;
justify-content: left;
align-items: center;
position: relative;

font-size: 3vw;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
color: #F8F0BB;

`;

export const DateBox = styled.div`
/*background-color: purple;*/

width: 15%;
height: 100%;

text-align: center;
display: inline-block;
justify-content: right;
align-items: center;
position: relative;

color: white;
font-size: 2vw;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;


`;

export const Title = styled.a`
color: #F8F0BB;
font-size: 3rem;

text-align: right;
text-shadow: 5px 5px 10px black;
line-height: 80px;

`;

export const Date = styled.a`
color: white;
font-size: 2rem;
line-height: 80px;


`;