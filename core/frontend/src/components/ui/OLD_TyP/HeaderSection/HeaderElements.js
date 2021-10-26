// import styled from "styled-components";

// export const HeaderContainer = styled.div.attrs({
//   className: "container-fluid",
// })`
//   background: #0c0c0c;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0 30px;
//   height: 88.5vh;
//   position: relative;
//   z-index: 1;

//   @media screen and (max-width: 780px) {
//     justify-content: center;
//   }

//   @media screen and (max-width: 480px) {
//     justify-content: center;
//     height: 54.5vh;
//   }
// `;

// export const HeaderBg = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;

// export const ImageBg = styled.img`
//   width: 100%;
//   height: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
//   background: #000000;
//   opacity: 0.6;
// `;

// export const ContentRow = styled.div.attrs({
//   className: "row row-cols-1 row-cols-md-2 row-cols-lg-2",
// })`
//   /* #background-color: rgb(0, 0, 255); */

//   position: absolute;
//   width: 100%;
//   height: 100%;
// `;

// export const ContentCol = styled.div.attrs({
//   className: "col",
// })`
//   // background-color: rgb(245, 17, 101);
// `;

// // ===== Title Column ===== //

// export const TitleRow = styled.div.attrs({
//   className: "row justify-content-center align-items-center",
// })`
//   height: 100%;

//   // background-color: rgb(0, 255, 255);
// `;

// export const HeaderTitle = styled.div.attrs({
//   className: "col-md-8 align-self-center",
// })``;

// export const Title = styled.h1`
//   color: ${(props) => (props.primary ? "#F8F0BB" : "#49a651")};
//   font-size: 5rem;
//   text-align: left;
//   text-shadow: 10px 5px 10px black;
//   line-height: 80px;

//   @media screen and (max-width: 760px) {
//     font-size: 4rem;
//     line-height: 65px;
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 3rem;
//     line-height: 50px;
//     text-align: center;
//   }
// `;

// export const Subtitle = styled.p`
//   margin-top: 24px;
//   color: #f8f0bb;
//   font-size: 1.6rem;
//   text-align: left;
//   max-width: 800px;
//   text-shadow: 10px 5px 10px black;

//   @media screen and (max-width: 760px) {
//     font-size: 1.2rem;
//   }

//   @media screen and (max-width: 480px) {
//     font-size: 1rem;
//     text-align: center;
//   }
// `;

// // ===== Search Column ===== //

// export const SearchRow = styled.div.attrs({
//   className: "row justify-content-center align-items-center",
// })`
//   height: 100%;

//   // background-color: rgb(0, 255, 120);
// `;

// export const SearchContainer = styled.div.attrs({
//   className: "row justify-content-center align-items-center",
// })`
//   height: 100%;
//   width: 100%;

//   // background-color: rgb(255, 69, 64);
// `;

// // export const SearchBarColumn = styled.div.attrs({
// //   className: "col-8",
// // })`
// //   background-color: rgba(255, 255, 255, 1);
// //   border-radius: 2.5vw 0% 0% 2.5vw;
// //   height: 10%;
// //   /* width: 60% @media screen and (max-width: 780px) { */
// //     height: 30%;
// //   }

// //   @media screen and (max-width: 480px) {
// //     height: 30%;
// //   }
// // `;

// export const DropDownColumn = styled.div.attrs({
//   className: "col-auto",
// })`
//   background-color: rgba(255, 255, 255, 1);
//   height: 10%;
//   width: 20%;

//   @media screen and (max-width: 760px) {
//     height: 30%;
//     width: 20%;
//   }

//   @media screen and (max-width: 480px) {
//     height: 30%;
//     width: 20%;
//   }
// `;

// export const SearchButtonColumn = styled.div.attrs({
//   className: "col-auto",
// })`
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 0% 2.5vw 2.5vw 0%;
//   height: 10%;
//   width: 10%;

//   @media screen and (max-width: 760px) {
//     height: 30%;
//     width: 10%;
//   }

//   @media screen and (max-width: 480px) {
//     height: 30%;
//     width: 10%;
//   /* }
// `;

// export const SearchBar = styled.input.attrs({
//   className: "form-control form-rounded",
// })`
//   width: 100%;
//   height: 60%;
//   border-radius: 25px;
//   border: 1.5px solid gray;
//   margin-top: 2.5%;

//   padding-left: 10px;
//   font-size: 2vmin;

//   :focus {
//     border-color: rgba(40, 167, 69, 0.8);
//     box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 1 1 8px rgba(40, 167, 69, 0.6);

// `; */

// export const DropDownButton = styled.button.attrs({
//   className: "btn btn-outline-secondary dropdown-toggle",
// })`
//   width: 100%;
//   height: 60%;
//   margin-top: 12%;
//   background-color: white;

//   text-align: center;
//   font-size: 1.7vmin;

//   @media screen and (max-width: 760px) {
//     height: 20%;
//   }

//   @media screen and (max-width: 480px) {
//     margin-top: 0%;
//     width: 100%;
//     height: 60%;
//     padding-top: 10%;
//     padding-left: 20%;

//     font-size: 1.4vmin;
//   }
// `;

// export const DropDown = styled.div.attrs({
//   className: "dropdown-menu",
// })``;

// export const DropDownItem = styled.a.attrs({
//   className: "dropdown-item",
// })``;

// export const SearchButton = styled.button.attrs({
//   className: "btn-sm btn-outline-success",
// })`
//   background-color: white;
//   border: 2px solid;
//   width: 100%;
//   height: 70%;
//   margin-top: 25%;
//   border-radius: 100%;

//   @media screen and (max-width: 480px) {
//     border: 1px solid;
//     margin-left: -100%;
//     margin-top: 75%;
//     border-radius: 100%;
//   }
// `;

// export const Icon = styled.i.attrs({
//   className: "fa fa-search",
// })`
//   vertical-align: middle;

//   @media screen and (max-width: 480px) {
//     vertical-align: top;
//     font-size: 2vmin;
//   }
// `;
