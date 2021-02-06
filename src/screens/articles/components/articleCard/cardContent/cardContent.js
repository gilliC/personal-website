import React from "react";
import styled from "styled-components";
import { TitleSmall } from "common/titleSmall";
import { t } from "services/translation/translate";
import { VerticalSpace } from "common/verticalSpace";
import { TitleBig } from "common/titleBig";
import { colorsPalette } from "services/styling/consts";
import { Label } from "./label";
import { SubTitle } from "./subTitle";
import { Description } from "./description";
import { ReadMoreButton } from "./readMoreButton";

export const CardContent = () => {
  return (
    <Container>
      <Label>VIM</Label>
      <VerticalSpace height={20} />
      <TitleSmall>Create color scheme for Vim</TitleSmall>
      <SubTitle>May 21, 2019 | 4 min read</SubTitle>
      <VerticalSpace height={20} />
      <Description>Vim is the perfect text editor for people who want the text editor to be perfect for them,  I have decided to create my own vim theme, and why not report about it?</Description>
      <VerticalSpace height={20} />
      <Separator />
      <ReadMoreButton />
    </Container>
  );
};

const Container = styled.div` height: 50%; padding: 20px;`;
const Separator = styled.div` width: 70%; height: 1px; background-color: ${colorsPalette.GREY}`;
