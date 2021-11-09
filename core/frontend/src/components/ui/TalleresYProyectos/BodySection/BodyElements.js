import styled from "styled-components";

export const BodyContainer = styled.div.attrs({
    className: "container-fluid justify-content-center"
})`
    // background: #0c0c0c;
    display: flex;
    position: relative;
    z-index: 1;
    min-height: 250px;
  
    @media screen and (max-width: 780px) {
      justify-content: center;
    }
`;

export const CardContainer = styled.div.attrs({
  className: "row row-cols-3 row-cols-md-5 row-cols-lg-6 align-items-stretch py-3"
})`

  // background-color: red;
  width: 100%;

`;

export const CardCol = styled.div.attrs({
  className: "col-fluid"
})`

  // background-color: ${(props) => (props.primary ? "green" : "blue")};
  // border: 2px dashed ${(props) => (props.primary ? "lime" : "cyan")};

  margin-bottom: 1%;

  @include media-breakpoint-up(sm){
    width: 30%;
  }
  @include media-breakpoint-up(md){
    width: 20%;
  }
  @include media-breakpoint-up(lg){
    width: 16,66%;
  }

  :before{
    content: "";
    display: block;
    padding-top: 100%;  /* initial ratio of 1:1*/
  }

`;

export const Square = styled.div.attrs({
  className: "container"
})`

  // background-color: green;
  position: relative;
  top: -100%;
  left: 0%;
  height: 100%;
  width: 100%;

`;