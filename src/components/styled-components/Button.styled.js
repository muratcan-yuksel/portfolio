import styled from "styled-components";

export const Button = styled.button`
  height: ${(props) => props.height};
  min-width: ${(props) => props.minWidth};
  width: auto;
  transition: 0.3s;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  /* border: 2px solid white; */
  border: ${(props) => props.border};
  border-radius: 1rem;
  padding: 10px;

  &:hover {
    /* background-color: var(--yellow-bg); */
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.hoverColor};
    font-size: ${(props) => props.fontSizeHover};
    border: ${(props) => props.borderHover};
  }
`;
