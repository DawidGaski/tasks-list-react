import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 5px;
  }
`;

export const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  font-size: medium;
  margin: 10px;
  margin-left: 5px;
  padding: 5px;
  transition: 0.3s;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.1);
  }
`;

export const Input = styled.input`
  margin: 10px;
  margin-right: 5px;
  padding: 5px;
  border: solid;
  border-color: ${({ theme }) => theme.color.alto};
  border-radius: 2px;
`;
