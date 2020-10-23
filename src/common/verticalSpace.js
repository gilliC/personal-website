import React from "react";
import styled from "styled-components";

export const VerticalSpace = ({ height}) => {
  return <Container height={height} />;
};

const Container = styled.div`
height: ${props=> props.height + 'px' || '20px' };
`