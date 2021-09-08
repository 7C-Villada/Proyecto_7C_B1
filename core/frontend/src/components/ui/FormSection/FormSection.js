import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import background from "../../../fotos/mountain.jpg";

const Background = styled.div`
  width: 100%;
  height: 80vh;
  background: url(${background});
`;

const FormH1 = styled.h1`
  color: #0fc11f;
  font-size: 2.5rem;
  font-weight: bold;
`;

const FormP = styled.p`
  font-size: 1rem;
  color: #3e2307;
`;

const DonateInput = styled.input`
  width: 250px;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 2px solid #0fc11f;
  padding: 0 15px;
  outline: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const DonateButton = styled.button`
  font-size: 1rem;
  cursor: pointer;
  padding: 5px 30px;
  border-radius: 5rem;
  background: none;
  border: 4px solid #0fc11f;
  color: #0fc11f;
  transition: all 0.1s ease-in-out 0s;
  height: 50px;

  &:hover {
    background: #0fc11f;
    color: #f8f0bb;
  }
`;

const FormSection = () => {
  const [donationValue, setDonationValue] = useState();

  const handleChange = (event) => {
    setDonationValue(event.target.value);
  };

  const retrieveDonation = (event) => {
    event.preventDefault();

    axios
      .get("/api/montoDonacionMercadoPago/" + donationValue)
      .then((response) => {
        window.location.href = response.data.init_point;
      });
  };

  return (
    <>
      <Background>
        <div
          className="container row align-items-center mx-auto"
          style={{ height: "80vh", margin: "0" }}
        >
          <div className="shadow card py-5">
            <div className="col text-center">
              <FormH1>Doná para ayudarnos</FormH1>
              <FormP>
                Con tu ayuda podemos seguir adelante
                <br /> con este gran proyecto.
              </FormP>
            </div>
            <div className="col d-flex flex-column-reverse align-items-center">
              <DonateButton onClick={retrieveDonation}>Donar</DonateButton>
              <DonateInput
                type="number"
                placeholder="Monto a Donar"
                min="1"
                max="10000"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </Background>
    </>
  );
};

export default FormSection;
