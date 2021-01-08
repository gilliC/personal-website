import React from "react";
import { useContactStore } from "screens/contact/store";
import { t } from "services/translation/translate";
import { Container } from "../contactInput/container";
import { Label } from "../contactInput/label";
import { Wrapper } from "../contactInput/wrapper";
import { TextArea } from "./textArea";

export const MessageTextArea = () => {
  const store = useContactStore();
  const changeMessage = (e) => { store.setMessage(e.target.value) }

  return (
    <Wrapper>
      <Container className="container">
        <TextArea type="text" required rows={3} onChange={changeMessage} value={store.message}/>
        <Label isTextArea>{t("contactScreen.messageInput.label")}</Label>
      </Container>
    </Wrapper>
  );
};
