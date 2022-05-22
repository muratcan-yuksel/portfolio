import styled from "styled-components";

export const Button = styled.button`
  height: 200px;
  width: 200px;
  background-color: ${(props) => props.backgroundColor};
  transition: 0.3s;

  &:hover {
    background-color: yellow;
  }
`;
