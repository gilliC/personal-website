import React from "react";
import styled from "styled-components";
import { t } from "services/translation/translate";
import { MainButton } from "common/mainButton";

export const ContactButton = () => {
  const onClick = () => {
    console.log("CLICK CONTACT");
  };
  return (
    <Container>
      <MainButton text={t("homeScreen.contactButton.text")} onClick={onClick} />
    </Container>
  );
};
const Container = styled.div`
  flex: 1;
`;
