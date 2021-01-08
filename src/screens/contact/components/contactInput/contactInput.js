import React from "react";
import { Container } from "./container";
import { Label } from "./label";
import { Input } from "./input";
import { Wrapper } from "./wrapper";

export const ContactInput = ({ label, autoComplete, alt, multiline }) => {
  return (
    <Wrapper>
      <Container className="container">
        <Input
          type="text"
          required
          autoComplete={autoComplete}
          alt={alt}
          multiline={multiline}
        />
        <Label>{label}</Label>
      </Container>
    </Wrapper>
  );
};
