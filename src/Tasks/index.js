import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="tasks__item">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`${hideDone
                    && task.done ? "task__hidden"
                    : "task__item"}`}
            >
                <button onClick={() => toggleTaskDone(task.id)} className="tasks__button tasks__content--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__content ${task.done ? "tasks__decoration" : ""}`}>
                    {task.content}
                </span>
                <button onClick={() => removeTask(task.id)} className="tasks__buttonRemove">🗑</button>
            </li>
        ))}
    </ul >
);
export default Tasks;