import {
  toggleHideDone,
  removeAllTasks,
  setAllDone,
  setAllFalse,
  selectHideDone,
  selectAreTasksEmpty,
  selectIsEveryTasksDone,
  selectIsEveryTasksFalse,
  fetchExampleTasks,
} from "../tasksSlice";
import { StyledButtons, Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTasksDone = useSelector(selectIsEveryTasksDone);
  const IsEveryTasksFalse = useSelector(selectIsEveryTasksFalse);
  const dispatch = useDispatch();

  if (areTasksEmpty) {
    return null;
  }
  return (
    <StyledButtons>
      <Button onClick={() => dispatch(toggleHideDone())}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        onClick={() => dispatch(setAllDone())}
        disabled={isEveryTasksDone}
      >
        Ukończ wszystkie
      </Button>
      <Button
        onClick={() => dispatch(setAllFalse())}
        disabled={IsEveryTasksFalse}
      >
        Odznacz wszystkie
      </Button>
      <Button onClick={() => dispatch(removeAllTasks())}>Usuń wszystkie</Button>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
    </StyledButtons>
  );
};

export default Buttons;
