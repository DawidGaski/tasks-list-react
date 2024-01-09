import styled from "styled-components";

export const StyledButtons = styled.div`
  margin: auto 0;
  display: flex;
  flex-wrap: wrap;
  font-size: medium;

  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Button = styled.button`
  color: teal;
  background-color: transparent;
  border: none;
  margin: 0 0 0 20px;
  border-bottom: 1px solid transparent;
  transition: color 0.5s;

  &:hover {
    color: rgb(2, 185, 185);
    cursor: pointer;
  }

  &:active {
    color: rgb(4, 218, 218);
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    margin: 10px;
  }
`;
