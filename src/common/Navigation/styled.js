import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const NavigationLink = styled(NavLink)`
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: white;
  font-size: 16px;

  &:hover {
    color: black;
    cursor: pointer;
  }

  &.active {
    font-weight: bold;
    color: hsl(20% 82% 43%);
  }
`;
export const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  background-color: teal;
  padding: 20px;
  margin: 0px;
`;
export const Item = styled.li`
  margin-left: 30px;
  margin-right: 30px;
`;
