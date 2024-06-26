import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import { List, Item, Content, Button, StyledNavLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import searchQueryParameter from "../searchQueryParameter";
import { toTask } from "../../../../routes";

const TaskList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParameter);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <StyledNavLink to={toTask({ id: task.id })}>
              {task.content}
            </StyledNavLink>
          </Content>
          <Button remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
