import React from "react";
import styled from "styled-components";
import { t } from "services/translation/translate";
import { SocialMediaIcons } from "screens/about/components/socialMediaIcons/socialMediaIcons";
import { MainButton } from "common/mainButton";

export const ButtonRow = () => {
  return (
    <Row>
      <SocialMediaIcons />
      <MainButton text={t("contactScreen.sendButton.label")} />
    </Row>
  );
};

const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
`;
