import { useDispatch } from "react-redux";
import { Button } from "./styled";
import { fetchExampleTasks } from "../../features/tasks/tasksSlice";

const ExampleButton = () => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </Button>
  );
};

export default ExampleButton;
