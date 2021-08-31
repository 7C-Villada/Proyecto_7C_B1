import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 780px) {
    justify-content: center;
  }
`;

export const HeaderBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #000000;
  opacity: 0.6;
`;

export const HeaderTitle = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: right;
  right: 8%;
`;

export const HeaderH1 = styled.h1`
  color: ${(props) => (props.primary ? "#F8F0BB" : "#49a651")};
  font-size: 5rem;
  text-align: right;
  text-shadow: 10px 5px 10px black;
  line-height: 80px;

  @media screen and (max-width: 760px) {
    font-size: 4rem;
    line-height: 65px;
  }

  @media screen and (max-width: 480px) {
    font-size: 3rem;
    line-height: 50px;
  }
`;

export const HeaderP = styled.p`
  margin-top: 24px;
  color: #f8f0bb;
  font-size: 1.6rem;
  text-align: right;
  max-width: 800px;
  text-shadow: 10px 5px 10px black;

  @media screen and (max-width: 760px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SearchContainer = styled.div`
  max-width: 1200px;
  position: absolute;
   
  align-items: left;
  left: 8%;
  /*bottom: 0%; para que esté al fondo */
  width: 45%;
  height: 8%;
  border-radius: 30px;
  background-color: rgb(255, 255, 255);
  display: inline;
  
`;

export const SearchBar = styled.input`
  width: 93%;
  height: 60%;
  border-radius: 25px;
  border: 2px solid gray;
  padding-left: 10px;
  margin: 3%;

`;

export const SearchBarColumn = styled.div`
  /*background-color: red;*/
  float: left;
  width: 70%;
  height: 100%;

`;

export const CheckBox = styled.input`
  color: rgb(24, 146, 228);
  cursor: pointer;
  margin-bottom: 1%;
  margin-right: 5%;
  background-color: #0fc11f;
`;

export const A = styled.a`

`;

export const CheckboxColumn = styled.div`
  /*background-color: blue;*/
  width: 20%;
  height: 100%;
  float: left;
  margin-top: 1%;

`;

export const SearchButton = styled.button`
  width: 60%;
  height: 60%;
  margin: 20%;
  background-color: #0fc11f;
  border: 2px solid #0fc11f;
  border-radius: 50%;
`;

export const SearchButtonColumn = styled.div`
  /*background-color: lime;*/
  width: 10%;
  height: 100%;
  float: left;
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;