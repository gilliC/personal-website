import React from "react";
import styled from "styled-components";
import { TitleSmall } from "common/titleSmall";
import { VerticalSpace } from "common/verticalSpace";
import { colorsPalette } from "services/styling/consts";
import { Label } from "./label";
import { SubTitle } from "./subTitle";
import { Description } from "./description";
import { ReadMoreButton } from "./readMoreButton";

export const CardContent = (props) => {
  return (
    <Container>
      <Label label={props.label} />
      <VerticalSpace height={20} />
      <TitleContainer>
        <TitleSmall>{props.title}</TitleSmall>
        <SubTitle {...props} />
      </TitleContainer>
      <Description>{props.description}</Description>
      <Separator />
      <ReadMoreButton link={props.link} />
    </Container>
  );
};
const TitleContainer = styled.div` height: 20%;`;

const Container = styled.div` height: 50%; padding: 20px;`;
const Separator = styled.div` width: 70%; height: 1px; background-color: ${colorsPalette.GREY}`;
