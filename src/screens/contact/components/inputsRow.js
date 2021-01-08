import React from "react";
import styled from "styled-components";
import { t } from "services/translation/translate";
import { ContactInput } from "./contactInput/contactInput";

export const InputsRow = () => {
  return (
      <Row>
        <ContactInput
          label={t("contactScreen.emailInput.label")}
          autoComplete="email"
          type="email"
          alt="Email Input"
        />
        <Space/>
        <ContactInput
          label={t("contactScreen.nameInput.label")}
          autoComplete="name"
          type="text"
          alt="Name Input"
        />
      </Row>
  );
};

const Row = styled.div`
  height: 9vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Space = styled.div`
  flex: 0.2;
`;
