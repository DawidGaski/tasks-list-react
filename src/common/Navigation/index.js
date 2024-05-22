import { toAuthor, toTasks } from "../../routes";
import { List, Item, NavigationLink } from "./styled";

const Navigation = () => (
  <nav>
    <List>
      <Item>
        <NavigationLink to={toTasks()}>Zadania</NavigationLink>
      </Item>
      <Item>
        <NavigationLink to={toAuthor()}>O autorze</NavigationLink>
      </Item>
    </List>
  </nav>
);
export default Navigation;
