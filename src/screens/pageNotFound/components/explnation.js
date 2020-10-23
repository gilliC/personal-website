import React from "react";
import styled from "styled-components";
import { t } from "services/translation/translate";
import { colorsPalette, MAIN_FONT } from "services/styling/consts";

export const Explnation = () => {
  return (
    <Title>
      {t("pageNotFoundScreen.explnation.text1")} <br />
      {t("pageNotFoundScreen.explnation.text2")}
    </Title>
  );
};

const Title = styled.h1`
  color: ${colorsPalette.BLACK};
  font-family: ${MAIN_FONT};
  font-weight: normal;
  font-size: min(20vw, 20px);
  text-align: center;
`;
