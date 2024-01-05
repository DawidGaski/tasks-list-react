import styled from "styled-components";

export const Formation = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 15px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 5px;
  }
`;

export const Input = styled.input`
  margin: 10px;
  margin-right: 5px;
  padding: 5px;
  border: solid;
  border-color: hsl(0, 1%, 89%);
`;

export const Button = styled.button`
  border: none;
  background-color: teal;
  color: white;
  font-size: medium;
  margin: 10px;
  margin-left: 5px;
  padding: 5px;
  transition: 1s;

  &:hover {
    background-color: rgb(1, 152, 152);
    transform: scale(1.25);
  }
`;
