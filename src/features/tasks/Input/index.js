import styled from "styled-components";

export default styled.input`
  margin: 10px;
  margin-right: 5px;
  padding: 5px;
  border: solid;
  border: ${({ theme }) => theme.color.alto};
`;
