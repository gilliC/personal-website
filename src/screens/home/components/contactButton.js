import React from "react";
import { t } from "services/translation/translate";
import { MainButton } from "common/mainButton";

export const ContactButton = () => {
  const onClick = () => {
    console.log("CLICK CONTACT");
  };
  return <MainButton text={t("homeScreen.contactButton.text")} onClick={onClick} />;
};
