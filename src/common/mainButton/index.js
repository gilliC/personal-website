import React from "react";
import { colorsPalette } from "services/styling/consts";
import styled from "styled-components";
import { ButtonText } from "./buttonText";

export const MainButton = ({ text, onClick }) => {
  return (
    <Button type="submit" onClick={onClick}>
      <ButtonText className='buttonText'>{text}</ButtonText>
    </Button>
  );
};

const Button = styled.button`
height: 6vw; max-height: 60px;
width: 25vw; max-width: 240px;
display: flex; align-items: center; justify-content: center;
outline: none;


border: 2px solid ${colorsPalette.MAIN_COLOR_TO}; border-radius: 3vw;
background-color: ${colorsPalette.WHITE};
box-shadow: 0px 10px 10px 0px rgba(0,0,0,0.40);

transition: all 0.3s;
cursor: pointer;

:hover {
  background-color: ${colorsPalette.SECONDARY_COLOR_TO};
  border-color: ${colorsPalette.SECONDARY_COLOR_TO};
  transition: all 0.3s;
  .buttonText {
    color: ${colorsPalette.WHITE};
  }
}
`;
