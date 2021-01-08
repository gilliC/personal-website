import React from "react";
import { t } from "services/translation/translate";
import styled from "styled-components";
import { Link } from "./components/link";

export const NavLinks = () => {
  return (
    <Container>
      <Link label={t("topBar.navLinks.home")} to='/'/>
      <Link label={t("topBar.navLinks.about")} to='/about'/>
      <Link label={t("topBar.navLinks.projects")} to='/projects'/>
      <Link label={t("topBar.navLinks.articles")} to='/articles'/>
      <Link label={t("topBar.navLinks.contact")} to='/contact'/>
    </Container>
  );
};

const Container = styled.div`
  padding-top: min(2vw, 20px);
  padding-right: min(10vw, 100px);
  padding-left: min(10vw, 100px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
