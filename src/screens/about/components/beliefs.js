import React from "react";
import styled from "styled-components";
import { TextMed } from "common/textMed";
import { t } from "services/translation/translate";

export const Beliefs = () => {
  return (
    <Container>
      <BoldText>{t("aboutScreen.belifes.1")}</BoldText>
      <BoldText>{t("aboutScreen.belifes.cleanCode")}</BoldText>
      <BoldText>{t("aboutScreen.belifes.learning")}</BoldText>
      <BoldText>{t("aboutScreen.belifes.teamwork")}</BoldText>
    </Container>
  );
};

const BoldText = styled(TextMed)`font-weight: 600; font-size: 20px; flex: 1;`;
const Container = styled(TextMed)`display: flex; flex-direction: row; flex: 1;`;
