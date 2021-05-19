import React from "react";
import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";
import { TextMed } from "common/textMed";
import { Container } from "../container";

export const AboutProject = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TextMed>{description}</TextMed>
    </Container>
  );
};

const Title = styled.h1`
  color: ${colorsPalette.MAIN_COLOR_TO};
  font-family: ${MAIN_FONT};
  font-weight: bold;
  font-size: 35px;
`;
