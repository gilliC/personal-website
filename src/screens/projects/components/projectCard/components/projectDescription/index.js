import React from "react";
import styled from "styled-components";
import { VerticalSpace } from "common/verticalSpace";
import { IconsRow } from "../iconsRow";
import { AboutProject } from "./aboutProject";
import { Technologies } from "./technologies";

export const ProjectDescription = (props) => {
  return (
    <SideContainer>
      <AboutProject />
      <Technologies />
      <VerticalSpace flex={0.5}/>
      <IconsRow />
    </SideContainer>
  );
};

const SideContainer = styled.div`
  flex: 1; display: flex; flex-direction: column;
`;