import React from "react";
import styled from "styled-components";
import { t } from "services/translation/translate";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const NameTitle = () => {
  return <Title>{t("homeScreen.bigTitle.name")}</Title>;
};

const Title = styled.h1`
  color: ${colorsPalette.BLACK};
  font-family: ${MAIN_FONT};
  font-weight: 900;
  font-size: max(7vw, 90px);
  letter-spacing: -5px;
  line-height: 40px;

`;
