import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

export const FooterStyled = styled.footer.attrs({
    className:"bg-dark text-center text-white",
})`
  background-color: rgba(62,35,7,1) !important;
`;

export const SocialMediaButton = styled.a.attrs(props => ({
    className:"btn btn-floating m-1",
    href: props.href,
}))`
  color: #f8f0bb !important;
  &:hover {
    background-color: #f8f0bb;
    color: rgba(62,35,7,1) !important;
  }
  &:focus {
    box-shadow: none !important;
  }
`;


const Footer = () => {

    const [numeroData, setNumeroData] = useState([]);

    useEffect(() => {
        axios.get("/api/numero-wp").then((response) => {
            let num = response.data.number;
            let statusCode = response.status;
            if (statusCode === 200) {
                setNumeroData(num);
            } else {
                console.log('No num provided ;)')
            }
        });
    }, []);

    return (
        <>
            {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
            {/* <div className="container my-5"> */}

            <FooterStyled>
            {/* <!-- Grid container --> */}
            <div className="container p-4 pb-0">
                {/* <!-- Section: Social media --> */}
                <section className="mb-4">
                <SocialMediaButton href={"https://www.instagram.com/fundacionaprenderhaciendo/?igshid=1b7iyx92lmbre"}>
                    <i className="fab fa-instagram"></i>
                </SocialMediaButton>
                <SocialMediaButton href={"https://wa.me/54" + numeroData}>
                    <i className="fab fa-whatsapp"></i>
                </SocialMediaButton>                
                <SocialMediaButton href={"https://www.facebook.com/Fundaci%C3%B3n-Aprender-Haciendo-106219127385194/"}>
                    <i className="fab fa-facebook-f"></i>
                </SocialMediaButton>
                <SocialMediaButton href={"https://ar.linkedin.com/in/fundaci%C3%B3n-aprender-haciendo-b4397b208"}>
                    <i className="fab fa-linkedin"></i>
                </SocialMediaButton>
                <SocialMediaButton href={"https://www.youtube.com/channel/UCZLlMVdcLU_UUwmOgTvr1MA"}>
                    <i className="fab fa-youtube"></i>
                </SocialMediaButton>
                <Link to="/form">
                    <SocialMediaButton>
                        <i className="fas fa-envelope"></i>
                    </SocialMediaButton>
                </Link>
                </section>
                {/* <!-- Section: Social media --> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3 small" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}} >
                © 2021 Copyright - Fundación Aprender Haciendo - Diseñado por&nbsp;
                <a className="text-white" href="https://www.itsv.edu.ar/">ITS Villada</a>
            </div>
            {/* <!-- Copyright --> */}
            </FooterStyled>
            
            {/* </div> */}
            {/* <!-- End of .container --> */}
        </>
    )
}

export default Footer
