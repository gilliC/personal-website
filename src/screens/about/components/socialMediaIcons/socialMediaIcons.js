import React from "react";
import styled from "styled-components";
import { faMediumM, faFacebookSquare, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { LinkedIcon } from "./linkedIcon";

export const SocialMediaIcons = () => {
  return (
    <Container>
      <LinkedIcon url="https://www.linkedin.com/in/gilli-carmon/" icon={faLinkedinIn} />
      <LinkedIcon url="https://medium.com/@gillicarmon" icon={faMediumM} />
      <LinkedIcon url="https://twitter.com/GilliCarmon" icon={faTwitter} />
      {/* <LinkedIcon url="https://www.facebook.com/gilicarmon" icon={faFacebookSquare} /> */}
    </Container>
  );
};

const Container = styled.div` width: 30%; flex-direction: row; display: flex;`;
