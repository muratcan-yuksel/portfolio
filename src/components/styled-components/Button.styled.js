import styled from "styled-components";

export const Button = styled.button`
  height: 5rem;
  width: auto;
  transition: 0.3s;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: 1.5rem;
  border: 2px solid white;
  border-radius: 1rem;
  padding: 10px;

  &:hover {
    background-color: var(--yellow-bg);
    color: ${(props) => props.hoverColor};
    font-size: 2rem;
  }
`;
