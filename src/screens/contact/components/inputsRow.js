import React from "react";
import styled from "styled-components";
import { t } from "services/translation/translate";
import { ContactInput } from "./contactInput/contactInput";
import { useContactStore } from "../store";
import { observer } from "mobx-react-lite";

export const InputsRow = observer (() => {
  const store = useContactStore();

  const changeName = (e) => { store.setName(e.target.value) }
  const changeEmail = (e) => { store.setEmail(e.target.value) }

  return (
      <Row>
        <ContactInput
          label={t("contactScreen.emailInput.label")}
          autoComplete="email"
          type="email"
          alt="Email Input"
          onChange={changeEmail}
          value={store.email}
        />
        <Space />
        <ContactInput
          label={t("contactScreen.nameInput.label")}
          autoComplete="name"
          type="text"
          alt="Name Input"
          onChange={changeName}
          value={store.name}
        />
      </Row>
  );
});

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Space = styled.div`
  flex: 0.2;
`;
