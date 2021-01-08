import React from "react";
import styled from "styled-components";
import { TitleBig } from "common/titleBig";
import { t } from "services/translation/translate";
import { ScreenContainer } from "./components/screenContainer";
import { colorsPalette } from "services/styling/consts";
import { ContactInput } from "./components/contactInput";

export const ScreenContact = () => {
  return (
    <ScreenContainer>
      <TitleBig>{t("contactScreen.title")}</TitleBig>
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
    </ScreenContainer>
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
