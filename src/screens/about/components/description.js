import React from "react";
import styled from "styled-components";
import { TextMed } from "common/textMed";
import { t } from "services/translation/translate";
import { Beliefs } from "./beliefs";
import { VerticalSpace } from "common/verticalSpace";

export const Description = () => {
  return (
    <div>
      <BoldText>{t("aboutScreen.niceToMeet")}</BoldText>
      <TextMed>{t("aboutScreen.about.text.1")}</TextMed>
      <TextMed>{t("aboutScreen.about.text.2")}</TextMed>
      <TextMed>{t("aboutScreen.about.text.3")}</TextMed>
      <TextMed>{t("aboutScreen.about.text.4")}</TextMed>
      <TextMed>{t("aboutScreen.about.text.5")}</TextMed>
      <TextMed>{t("aboutScreen.about.text.6")}</TextMed>
      <VerticalSpace height={30} />
      <Beliefs />
    </div>
  );
};

const BoldText = styled(TextMed)`
  font-weight: 600; font-size: 1.6vw;
`;
