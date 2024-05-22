import AuthorPage from "./features/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import Navigation from "./common/Navigation";
import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import { toAuthor, toTask, toTasks } from "./routes";

export default () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path={toTask()}>
        <TaskPage />
      </Route>
      <Route path={toTasks()}>
        <TasksPage />
      </Route>
      <Route path={toAuthor()}>
        <AuthorPage />
      </Route>
      <Route>
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
);
