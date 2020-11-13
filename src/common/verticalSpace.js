import styled from "styled-components";

export const VerticalSpace = styled.div`
height: ${props=> !props.flex ? props.height + 'px' || '20px' : 'auto' };
flex: ${props=> props.flex || 'auto' };
`