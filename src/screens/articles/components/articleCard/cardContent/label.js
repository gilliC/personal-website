import React from "react";
import styled from "styled-components";
import { TextMed } from "common/textMed";
import { colorsPalette } from "services/styling/consts";

const labelsColors = {
  VIM: colorsPalette.PINK,
  Career: colorsPalette.SECONDARY_COLOR_TO
}

export const Label = ({ label }) => {
  return <LabelComponent color={labelsColors[label]}>{label}</LabelComponent>;
}

const LabelComponent = styled(TextMed)`
  padding: 8px 16px;
  width: fit-content;
  height: fit-content;
  background-color: ${props=> props.color || colorsPalette.PINK};
  color: ${colorsPalette.WHITE};
  border-radius: 10px;
  font-size: 1vw;
`;
