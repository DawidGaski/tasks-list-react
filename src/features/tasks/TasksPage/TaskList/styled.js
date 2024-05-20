import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: teal;
`;

export const List = styled.ul`
  padding-inline-start: 0px;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 15px;
  align-items: center;
  justify-content: start;
  border-bottom: solid 1px ${({ theme }) => theme.color.alto};
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
  border: none;
  color: ${({ theme }) => theme.color.white};
  width: 40px;
  height: 40px;
  transition: filter 0.3s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background: ${({ theme }) => theme.color.forestGreen};
    `}
  ${({ remove }) =>
    remove &&
    css`
      background: ${({ theme }) => theme.color.crimson};
    `}

&:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
