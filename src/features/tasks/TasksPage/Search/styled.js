import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Input = styled.input`
  margin: 10px;
  margin-right: 5px;
  padding: 5px;
  border: solid;
  border-color: ${({ theme }) => theme.color.alto};
  border-radius: 2px;
`;
