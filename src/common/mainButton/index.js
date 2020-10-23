import React from "react";
import { colorsPalette } from "services/styling/consts";
import styled from "styled-components";
import { ButtonText } from "./buttonText";

export const MainButton = ({ text, onClick }) => {
  return (
    <Button type="submit" onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

const Button = styled.button`
height: 6vw;
max-height: 60px;
width: 25vw;
max-width: 240px;
border: 2px solid ${colorsPalette.MAIN_COLOR_TO};
border-radius: 3vw;
background-color: ${colorsPalette.WHITE};
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;
