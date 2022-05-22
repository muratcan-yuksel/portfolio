import styled from "styled-components";

export const Para = styled.p`
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  line-height: ${(props) => props.lineHeight};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  height: auto;
  width: auto;
  border-radius: 1rem;
  transition: 0.3s;
  &:hover {
    background-color: white;
  }
`;
