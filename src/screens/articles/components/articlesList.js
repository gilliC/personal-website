import React from "react";
import styled from "styled-components";
import { ArticleCard } from "./articleCard/articleCard";

export const ArticlesList = () => {
  return (
    <Container>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  flex-direction: row;
  width: 100%;
  position: absolute; top: 32.4vh;
`;
