import styled from "styled-components";

export const Segment = styled.section`
  background-color: hsl(0, 0%, 100%);
  border: solid;
  border-color: hsl(0, 1%, 89%);
  padding: 5px;
  margin: 5px 10%;
`;

export const Header = styled.header`
  border-bottom: solid 1px hsl(0, 1%, 89%);
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
