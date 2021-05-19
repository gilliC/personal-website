import React, { Fragment } from "react";
import styled from "styled-components";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";
import { TextMed } from "common/textMed";
import { Container } from "../container";
import { t } from "services/translation/translate";

export const Technologies = ({ technologiesSkills}) => {
  const technologoiesText = technologiesSkills.map(item=>{
    return <Fragment>{item} <br /></Fragment>;
  });
  return (
    <Container>
      <SubTitle>{t("projectsScreen.technologies")}</SubTitle>
      <TextMed>
        {technologoiesText}
      </TextMed>
    </Container>
  );
};

const SubTitle = styled.h2`
  color: ${colorsPalette.MAIN_COLOR_FROM};
  font-family: ${MAIN_FONT};
  font-weight: bold;
  font-size: 22px;
`;
