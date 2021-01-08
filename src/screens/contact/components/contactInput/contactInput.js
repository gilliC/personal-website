import React from "react";
import styled from "styled-components";
import { Container } from "./container";
import { Label } from "./label";
import { Input } from "./input";

export const ContactInput = ({ label, autoComplete, alt }) => {
  return (
    <Wrapper>
      <Container className="container">
          <Input type="text" required autoComplete={autoComplete} alt={alt} />
          <Label>{label}</Label>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
flex: 1; display: flex; align-items: center;

.transition, label, input[type="text"] {
  -moz-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  -o-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  -webkit-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
}

`;
