import styled from "styled-components";

export const Segment = styled.section`
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
  padding: 5px;
  margin: 5px 10%;
`;

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.color.alto};
  padding: 5px;
  margin: 5px;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
