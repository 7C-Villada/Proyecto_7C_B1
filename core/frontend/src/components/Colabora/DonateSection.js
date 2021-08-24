import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import axios from "axios";

const DonateContainer = styled.div`
  height: 50vh;
  width: 50%;
  margin: 0 auto;
  /* border: 1px solid gray; */
  border-radius: 10px;
  display: grid;
  grid-template-columns: 50% auto;

  @media screen and (max-width: 780px) {
    width: 80%;
    grid-template-columns: auto;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 30px;

  @media screen and (max-width: 780px) {
    align-items: center;
    margin-right: 0;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
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

const DonateH1 = styled.h1`
  font-size: 2.5rem;
  color: #3e2307;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
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

  &:hover {
    background: #0fc11f;
    color: #f8f0bb;
  }
`;

const DonateSection = () => {
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
      <DonateContainer>
        <InfoContainer>
          <DonateH1>Doná para ayudarnos.</DonateH1>
          <p>
            Con tu ayuda podemos seguir con la fundación y hacer mejores
            proyectos.
          </p>
        </InfoContainer>
        <InputContainer>
          <label for="donateInput">Monto a donar</label>
          <DonateInput
            type="number"
            placeholder="$$$$$"
            min="1"
            max="10000"
            id="donateInupt"
            onChange={handleChange}
          />
          <DonateButton onClick={retrieveDonation}>Doná</DonateButton>
        </InputContainer>
      </DonateContainer>
    </>
  );
};

export default DonateSection;
