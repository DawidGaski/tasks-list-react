import styled from "styled-components";

export const Button = styled.button`
  color: ${({ theme }) => theme.color.teal};
  background-color: transparent;
  border: none;
  margin: 0 0 0 20px;
  border-bottom: 1px solid transparent;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 10px;
  }
`;
