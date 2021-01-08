import React from "react";
import { TitleBig } from "common/titleBig";
import { t } from "services/translation/translate";
import { ScreenContainer } from "./components/screenContainer";
import { InputsRow } from "./components/inputsRow";
import { MessageTextArea } from "./components/messageTextArea/messageTextArea";
import { ButtonRow } from "./components/buttonRow/buttonRow";

export const ScreenContact = () => {
  return (
    <ScreenContainer>
      <TitleBig>{t("contactScreen.title")}</TitleBig>
      <InputsRow />
      <MessageTextArea />
      <ButtonRow />
    </ScreenContainer>
  );
};
