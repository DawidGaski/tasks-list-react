import { toAuthor, toTasks } from "../../routes";
import { StyledNavList, StyledNavListItem, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <nav>
      <StyledNavList>
        <StyledNavListItem>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </StyledNavListItem>
        <StyledNavListItem>
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </StyledNavListItem>
      </StyledNavList>
    </nav>
  );
};
export default Navigation;
