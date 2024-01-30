import Buttons from "./Buttons";
import Form from "./Form";
import TaskList from "./TaskList";
import Search from "./Search";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import ExampleButton from "../../../common/ExampleButton";

function TasksPage() {
  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section
        title="Dodaj Nowe Zadanie"
        body={<Form />}
        extraHeaderContent={<ExampleButton />}
      />
      <Section title="Wyszukiwarka" body={<Search />} />
      <Section
        title="Lista Zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
