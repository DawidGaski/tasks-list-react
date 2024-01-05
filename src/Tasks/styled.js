import styled, { css } from "styled-components";

export const List = styled.ul`
  padding-inline-start: 0px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 15px;
  align-items: center;
  justify-content: start;
  border-bottom: solid 1px hsl(0, 1%, 89%);
  margin: 1px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 5px;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  background-color: rgb(18, 114, 18);
  border-radius: 10%;
  border-color: whitesmoke;
  color: white;
  width: 40px;
  height: 40px;
  transition: 0.5s;
  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: rgb(19, 114, 18);

      &:hover {
        background-color: rgb(20, 129, 20);
        font-weight: bold;
        cursor: pointer;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: rgb(200, 17, 17);

      &:hover {
        background-color: rgb(218, 18, 18);
        font-weight: bold;
        cursor: pointer;
      }
    `}
`;
