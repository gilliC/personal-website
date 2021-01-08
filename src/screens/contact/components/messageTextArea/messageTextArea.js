import React from "react";
import { t } from "services/translation/translate";
import { Container } from "../contactInput/container";
import { Label } from "../contactInput/label";
import { Wrapper } from "../contactInput/wrapper";
import { TextArea } from "./textArea";

export const MessageTextArea = () => {
  return (
    <Wrapper>
      <Container className="container">
        <TextArea type="text" required rows={3}/>
        <Label isTextArea>{t("contactScreen.messageInput.label")}</Label>
      </Container>
    </Wrapper>
  );
};
