import React from "react";
import styled from "styled-components";
import { BackgroundGradientRow } from "common/backgroundGradientRow";
import { Header } from "./components/header";
import { ArticlesList } from "./components/articlesList";

export const ScreenArticles = () => {
  return (
      <BackgroundGradientRow topComponent={<Header />}>
        <Container>
          <ArticlesList />
        </Container>
      </BackgroundGradientRow>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
  height: 100%;
`;
