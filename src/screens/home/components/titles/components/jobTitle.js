import React from "react";
import styled from "styled-components";
import { t } from "services/translation/translate";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const JobTitle = () => {
  return <Title>{t("homeScreen.bigTitle.job")}</Title>;
};

const Title = styled.h1`
  color: ${colorsPalette.BLACK};
  font-family: ${MAIN_FONT};
  font-weight: 100;
  font-size: min(7vw, 70px);
  letter-spacing: -5px;
  line-height: 40px;
`;
