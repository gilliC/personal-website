import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { colorsPalette } from "services/styling/consts";

export const SocialMediaIcons = () => {
  return (
    <Container>
      <Icon>
        <FontAwesomeIcon icon={faInstagram} size="2x" color={colorsPalette.BLACK} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" color={colorsPalette.BLACK}/>
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faTwitter} size="2x" color={colorsPalette.BLACK} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" color={colorsPalette.BLACK} />
      </Icon>
    </Container>
  );
};

const Icon = styled.div` flex: 1; align-self:center`;
const Container = styled.div` width: 30%; flex-direction: row; display: flex;`;
