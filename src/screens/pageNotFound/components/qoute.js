import React from "react";
import styled from "styled-components";
import { t } from "services/translation/translate";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const Qoute = () => {
  return (
    <Title>
      {t("pageNotFoundScreen.qoute.text1")} <br />
      {t("pageNotFoundScreen.qoute.text2")}
    </Title>
  );
};

const Title = styled.h1`
  color: ${colorsPalette.BLACK};
  font-family: ${MAIN_FONT};
  font-weight: normal;
  font-size: min(40vw, 40px);
  text-align: center;
`;
