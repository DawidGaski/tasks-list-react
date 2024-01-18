import Buttons from "./Buttons";
import Form from "./Form";
import TaskList from "./TaskList";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {
  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section title="Dodaj Nowe Zadanie" body={<Form />} />
      <Section
        title="Lista Zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;
