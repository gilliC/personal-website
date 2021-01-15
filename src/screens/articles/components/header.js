import React from "react";
import styled from "styled-components";
import { TextMed } from "common/textMed";
import { t } from "services/translation/translate";
import { VerticalSpace } from "common/verticalSpace";
import { TitleBig } from "common/titleBig";
import { colorsPalette } from "services/styling/consts";

export const Header = () => {
  return (
    <Container>
      <Line />
      <Title>{t("articlesScreen.title")}</Title>
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
`;
