import Buttons from "./Buttons";
import Form from "./Form";
import TaskList from "./TaskList";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { UseTasks } from "../../useTasks";

function Tasks() {
  const {
    // tasks,
    // hideDone,
    // toggleHideDone,
    removeTask,
    // toggleTaskDone,
    setAllDone,
    // addNewTask,
  } = UseTasks();

  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section title="Dodaj Nowe Zadanie" body={<Form />} />
      <Section
        title="Lista Zadań"
        body={<TaskList removeTask={removeTask} />}
        extraHeaderContent={<Buttons setAllDone={setAllDone} />}
      />
    </Container>
  );
}

export default Tasks;
