import React from "react";
import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";
import { TextMed } from "common/textMed";
import { Container } from "../container";

export const AboutProject = (props) => {
  return (
    <Container>
      <Title>Goals Tracker</Title>
      <TextMed>
        A simple react native app to track the amount of steps you take to
        achieve your goals
      </TextMed>
    </Container>
  );
};

const Title = styled.h1`
  color: ${colorsPalette.MAIN_COLOR_TO};
  font-family: ${MAIN_FONT};
  font-weight: bold;
  font-size: 35px;
`;