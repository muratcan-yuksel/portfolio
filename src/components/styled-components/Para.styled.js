import styled from "styled-components";

export const Para = styled.p`
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  line-height: ${(props) => props.lineHeight};
  border-radius: 1rem;
  padding: 0 10px;
  transition: 0.3s;
  &:hover {
    background-color: white;
  }
`;
