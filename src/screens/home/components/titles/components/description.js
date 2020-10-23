import React from "react";
import styled from "styled-components";
import { t } from "services/translation/translate";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const Description = () => {
  return <Paragraph>{t("homeScreen.description")}</Paragraph>;
};

const Paragraph = styled.p`
  color: ${colorsPalette.BLACK};
  font-family: ${MAIN_FONT};
  font-weight: 300;
  font-size: min(2vw, 24px);
`;
