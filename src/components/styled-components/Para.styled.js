import styled from "styled-components";

export const Para = styled.p`
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  line-height: ${(props) => props.lineHeight};
  &:hover {
    background-color: yellow;
  }
`;
