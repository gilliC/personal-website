import React from "react";
import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";
import { TextMed } from "common/textMed";
import { VerticalSpace } from "common/verticalSpace";
import { IconsRow } from "./iconsRow";

export const ProjectDescription = (props) => {
  return (
    <SideContainer>
      <Title>Goals Tracker</Title>
      <TextMed>
        A simple react native app to track the amount of steps you take to
        achieve your goals
      </TextMed>
      <SubTitle>Technologies</SubTitle>
      <TextMed>React Native <br /> Redux</TextMed>
      <VerticalSpace height={20} />
      <IconsRow />
    </SideContainer>
  );
};

const SideContainer = styled.div` flex: 1;`;

const Title = styled.h1`color: ${colorsPalette.MAIN_COLOR_TO}; font-family: ${MAIN_FONT}; font-weight: bold; font-size: 35px;`;
const SubTitle = styled.h2`color: ${colorsPalette.MAIN_COLOR_FROM}; font-family: ${MAIN_FONT}; font-weight: bold; font-size: 22px; `;

const RowContainer = styled.div` flex: 1; display: flex; flex-direction: row;`;
