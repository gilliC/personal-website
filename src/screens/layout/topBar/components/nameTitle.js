import React from "react";
import styled from "styled-components";
import { t } from "services/translation/translate";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const NameTitle = () => {
  return <Title>{t("topBar.nameTitle")}</Title>;
};

const Title = styled.h1`
  color: ${colorsPalette.MAIN_COLOR_TO};
  font-family: ${MAIN_FONT};
  font-weight: 300;
  font-size: min(25vw, 25px);
  width: 40px;
`;
