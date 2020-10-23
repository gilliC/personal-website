import React from "react";
import styled from "styled-components";
import { t } from "services/translation/translate";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const Qoute = () => {
  return <Title>{t("pageNotFoundScreen.qoute.text1")}</Title>;
};

const Title = styled.h1`
  color: ${colorsPalette.BLACK};
  font-family: ${MAIN_FONT};
  font-weight: normal;
  font-size: min(35vw, 35px);
  text-align: center;
  letter-spacing: 10px;

  width: 80%;
`;
