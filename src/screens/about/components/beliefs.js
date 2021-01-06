import React from "react";
import styled from "styled-components";
import { TextMed } from "common/textMed";
import { t } from "services/translation/translate";

export const Beliefs = () => {
  return (
    <Container>
      <BoldText isLeft>{t("aboutScreen.belifes.1")}</BoldText>
      <BoldText>{t("aboutScreen.belifes.cleanCode")}</BoldText>
      <BoldText>{t("aboutScreen.belifes.learning")}</BoldText>
      <BoldText>{t("aboutScreen.belifes.teamwork")}</BoldText>
    </Container>
  );
};

const BoldText = styled(TextMed)`font-weight: 600; font-size: 1.3vw; flex: 1; text-align: ${props=> props.isLeft? 'left' : 'center' }`;
const Container = styled(TextMed)`display: flex; flex-direction: row; flex: 1;`;
