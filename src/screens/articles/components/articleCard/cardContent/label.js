import React from "react";
import styled from "styled-components";
import { TextMed } from "common/textMed";
import { colorsPalette } from "services/styling/consts";

export const Label = styled(TextMed)`
  padding: 8px 16px;
  width: fit-content;
  height: fit-content;
  background-color: ${colorsPalette.PINK};
  color: ${colorsPalette.WHITE};
  border-radius: 10px;
  font-size: 1vw;
`;
