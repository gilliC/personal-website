import React from "react";
import styled from "styled-components";
import { t } from "services/translation/translate";
import { TitleBig } from "common/titleBig";
import { colorsPalette } from "services/styling/consts";
import { SPACE_HEIGHT } from "common/backgroundGradientRow";

export const Header = () => {
  return (
    <Container>
      <Line />
      <Title>{t("projectsScreen.title")}</Title>
      <Line />
    </Container>
  );
};

const Title = styled(TitleBig)`
  flex: 0.3;
`;

const Line = styled.div`
  flex: 1;
  background-color: ${colorsPalette.MAIN_COLOR_FROM};
  height: 3px;
  margin-right: 20px;
  margin-left: 20px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  height: ${SPACE_HEIGHT};
`;
