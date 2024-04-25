import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../features/tasks/TasksPage/Buttons/styled";
import {
  fetchExampleTasks,
  selectLoading,
} from "../../features/tasks/tasksSlice";

const ExampleButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {loading ? "ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
};

export default ExampleButton;
