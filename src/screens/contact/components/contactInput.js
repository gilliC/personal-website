import React from "react";
import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const ContactInput = ({ label, autoComplete, type, alt }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        variant="outlined"
        autoComplete={autoComplete}
        type={type}
        alt={alt}
      />
    </Container>
  );
};

const Input = styled.input`
  flex: 2;
  border: solid ${colorsPalette.MAIN_COLOR_TO} 3px;
  border-radius: 5px;
  color: ${colorsPalette.BLACK};
  font-size: 1.2vw;
  font-family: ${MAIN_FONT};
  padding: 10px 20px;
`;

const Label = styled.label`
  flex: 2;
  font-family: ${MAIN_FONT}; color: ${colorsPalette.BLACK}; font-size: 1.2vw; font-weight: 600;
`;
const Container = styled.div`
  flex: 1; display: flex; flex-direction: column;
   
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;
